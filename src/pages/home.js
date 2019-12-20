import React from "react"

import Layout from "../components/layout"
import PostList from "../components/postlist"
import "./pages.css"

const Home = () => {
    return (
        <div>
            <Layout>
                <PostList />
            </Layout>
        </div>
    )
}

export default Home