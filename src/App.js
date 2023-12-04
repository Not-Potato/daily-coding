import './App.css';
import { useState } from 'react';

function Header(props) {
  return <header>        
  <h1><a href="/" onClick={(event) => {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
  요즘 대세는 누구?
</header>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>);
  }

  return <nav>
  <ul>
      {lis}
  </ul>
</nav>
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p>
        <input type="text" name="title" placeholder="title"></input>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="Create"></input>
      </p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p>
        <input type="text" name="title" placeholder="title" value={title} onChange={event => {
          setTitle(event.target.value);
        }}></input>
      </p>
      <p>
        <textarea name="body" placeholder="body" value={body} onChange={event => {
          setBody(event.target.value);
        }}></textarea>
      </p>
      <p>
        <input type="submit" value="Update"></input>
      </p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const [topics, setTopics] = useState([
    {id: 1, title: '뉴진스', body: '하입보이'},
    {id: 2, title: '르세라핌', body: '언포기븐'},
    {id: 3, title: '조현아', body: '무쉰 사랑해'},
  ]);

  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextContoller = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextContoller = <>
    <li><a href={'/update'+id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE');
    }}>update</a></li>
    <li><input type="button" value="delete" onClick={() => {
      const newTopics = [];
      for (let i=0; i < topics.length; i++) {
        if (topics[i].id !== id) {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}></input></li>
    </>;
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id: nextId, title: _title, body: _body};
      const newTopics = [...topics];
      newTopics.push(newTopic)
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>;
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      console.log(title, body);
      const newTopics = [...topics];
      const updateTopic = {id:id, title:title, body:body};

      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updateTopic;
          console.log(newTopics);
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>;
  }

  return (
    <div className="App">
      <Header title="올해의 대상" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id)
      }}></Nav
      >
      {content}

      <ul>
        <li>
          <a href='/crate' onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>create</a>
        </li>

        {contextContoller}
      </ul>

    </div>
  );
}

export default App;
