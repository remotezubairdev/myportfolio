export default function sitemap() {
    const baseUrl = "https://zubairdevportfolio.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date("2026-08-11"),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}