import { useRouter } from 'next/router';
// 우리 모시깽 도메인.com/news/동적으로 받아옴

const NewsDetailPage = () => {
    const router = useRouter();
    const newsId = router.query.newsid;
    console.log(newsId);
    return (
        <div>
        <h1>The News Detail Page</h1>
        </div>
    );
};
    
export default NewsDetailPage;
