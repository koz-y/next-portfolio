import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/blog.module.scss"

const Blog = (props) => {
  //   console.log(props)
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Blog page</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {props.blogs.map((blog, index) => {
            return (
              <div key={index} className={styles.blogCard}>
                <div className={styles.textContainer}>
                  <h3>{blog.frontmatter.title}</h3>
                  <p>{blog.frontmatter.excerpt}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>read more ...</a>
                  </Link>
                </div>
                <div className={styles.cardImg}>
                  <Image
                    src={blog.frontmatter.image}
                    alt="card-image"
                    height={300}
                    width={1000}
                    quality={90}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    // console.log(JSON.parse(JSON.stringify(values)))
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\/]/, "").slice(0, -3)
      const value = values[index]

      const document = matter(value.default)
      return {
        frontmatter: document.data,
        slug: slug,
      }
    })
    return data
  })(require.context("../data", true, /\.md$/))

  const sortingArticles = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })
  return {
    props: {
      blogs: sortingArticles,
    },
  }
}
