import { Fragment } from "react";
import Link from "next/link";
// 우리 모시깽 도메인.com/news

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* next/link를 사용해서 html 전부가 리로드 되는게 아닌 해당 컴포넌트만 리로드함. */}
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <a href="/news/something-else">Something else</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
