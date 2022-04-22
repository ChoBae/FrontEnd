// 클래스형 컴포넌트로 함수형 컴포넌트의 useEffect의 생명주기 메소드 다루기
import { Fragment } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
// 클래스형 컴포넌트
class UserFinder extends Component {
  // 컨택스트 추가 -> 정적으로 선언해줌 2개이상의 컨택스트가 있을경우 위험부담 커진다.
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  // useEffect와 같은 기능 -> 의존성 배열x -> 한번 실행
  componentDidMount() {
    // 컨택스트 추가
    this.setState({ filteredUsers: this.context.users });
  }

  // useEffect와 같은 기능 -> 의존성 배열 -> 해당값이 변화할때마다
  componentDidUpdate(preProps, preState) {
    if (preState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// 함수형 컴포넌트
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//       <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
