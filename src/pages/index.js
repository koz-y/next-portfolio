import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/index.module.scss"

const index = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        <div className={styles.textContainer}>
          <h1>I&apos;m Abe Hiroki</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>
              Incididunt dolor enim nisi do ipsum reprehenderit velit enim duis duis
              consequat irure aliquip veniam. Aliquip qui minim eiusmod commodo fugiat
              incididunt eiusmod et mollit eu. Dolore irure est cillum quis pariatur
              consectetur ad do.
            </p>
          </div>
          <Image
            src="/images/profile.jpg"
            alt="hero"
            height={1195}
            width={1000}
            quality={90}
          />
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillsContainer}>
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>JavaScript / 10 years</span>
            </div>
            <div>
              <img src="/images/react.svg" alt="react" />
              <span>React / 5 years</span>
            </div>
            <div>
              <img src="/images/gatsby.svg" alt="gatsby" />
              <span>Gatsby / 3 years</span>
            </div>
            <div>
              <img src="/images/next.svg" alt="next" />
              <span>Next.JS / 3 years</span>
            </div>
          </div>
        </div>
        <div className={styles.ctaButton}>
          <Link href="/contact">
            <a>Make It Happen.</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default index
