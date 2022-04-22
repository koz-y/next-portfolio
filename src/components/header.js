import Image from "next/image"
import Link from "next/link"
import styles from "../styles/common.module.scss"

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Link href={"/"}>
            <a>
              <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
            </a>
          </Link>
          <ul>
            <li>
              <Link href={"/blog"}>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
