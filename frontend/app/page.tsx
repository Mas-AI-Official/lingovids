import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>LingoVids</title>
                <meta name="description" content="LingoVids - AI-powered multilingual video platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontSize: "24px" }}>
                <h1>🚀 Welcome to LingoVids 🎉</h1>
            </main>
        </>
    );
}
