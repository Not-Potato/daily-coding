
function App() {
    const topics = [
      {id: 'userId', title: '사번', value: userInfo.userId, button: 'N'},
      {id: 'resiNum', title: '생년월일', value: userInfo.resiNum, button: 'Y'},
      {id: 'gender', title: '성별', value: userInfo.gender, button: 'N'},
      {id: 'userPassword', title: '비밀번호', value: '열람할 수 업슴', button: 'Y'},
      {id: 'phoneNum', title: '전화번호', value: userInfo.phoneNum, button: 'Y'},
      {id: 'email', title: '이메일', value: userInfo.email, button: 'Y'},
      {id: 'jobTitle', title: '직책', value: userInfo.jobTitle, button: 'Y'},
      {id: 'telNum', title: '부서 전화번호', value: userInfo.telNum, button: 'N'},
      {id: 'department', title: '부서', value: userInfo.department, button: 'Y'},
      {id: 'region', title: '지역', value: userInfo.region, button: 'Y'},
      {id: 'formattedCdatetime', title: '가입일자', value: userInfo.formattedCdatetime, button: 'N'},
    ]
  
    return (
      <div className="App">
        <InfoGroup>
            <p>사번:{userInfo.userId}</p>
        </InfoGroup>

        <InfoGroup>
            <p>생년월일: {userInfo.resiNum}</p>
        </InfoGroup>

        <InfoGroup>
            <p>성별: {userInfo.gender}</p>
        </InfoGroup>

        <InfoGroup>
            <p>비밀번호는 열람할 수 업슴</p>
            <Button onClick={open} id="PW">비밀번호 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>전화번호: {userInfo.phoneNum}</p>
            <Button onClick={open} id="PN">전화번호 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>이메일: {userInfo.email}</p>
            <Button onClick={open} id="EM">이메일 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>직책: {userInfo.jobTitle}</p>
            <Button onClick={open} id="JT">직책 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>부서 전화번호: {userInfo.telNum}</p>
        </InfoGroup>

        <InfoGroup>
            <p>부서: {userInfo.department}</p>
            <Button onClick={open} id="DP">부서 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>지역: {userInfo.region}</p>
            <Button onClick={open} id="RG">지역 변경</Button>
        </InfoGroup>

        <InfoGroup>
            <p>가입일자: {userInfo.formattedCdatetime}</p>
        </InfoGroup>
      </div>
    );
  }
  