import { Component } from "react";
// 오류 경계 추가 -> 클래스형 컴포넌트만 가능 -> 인터넷 연결같은 데이터 관련 오류시 처리?
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
      console.log(error)
      this.setState({hasError: true})
  }
  render() {
      if (this.state.hasError){
          return <p>어떤 에러가 있넹?</p>
      }
    return this.props.children;
  }
}
export default ErrorBoundary;
