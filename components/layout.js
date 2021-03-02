import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import homeStyles from '../styles/home.module.scss'
import Link from 'next/link'


const name = 'NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）'
const pageName = 'NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）'
export const siteTitle = 'NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）'

export default function Layout({ children, home }) {
  return (
    <div id="app" name="top"  className={home ? ("home") : (pageName)}>
      <Head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge"/>
        <meta format-detection="telephone=no"/>
        <meta name="theme-color" content="#FFFFFF"/>
        <meta name="description" content="{siteTitle}はプロモーション関連の映像を中心としたライブ映像、CM、ミュージックビデオなどの制作会社です。"/>
        <meta name="keywords" content="ライブ映像,CM,ミュージックビデオ"/>
        <meta property="og:title" content={siteTitle}/>
        <meta property="og:description" content="へのアクセス情報。ライブ映像、CM、ミュージックビデオなどの制作ならNEW BRIDGE BROTHERS"/>
        <meta property="og:locale" content="ja_JP"/><meta property="og:url" content="https://nb-bros.com"/>
        <title>NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）</title>
        <link rel="icon" href="/static/image/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.sitelogo}>
            <Link href="/">
              <a>
                <span className={styles.logo}>
                  <span className={styles.logoB}>
                    <Image
                      priority
                      src="/static/image/common/brandLogo.svg"
                      className={homeStyles.borderCircle}
                      width={40}
                      height={25}
                      alt={name}
                    />
                  </span>
                  <span className={styles.logoW}>
                    <Image
                      priority
                      src="/static/image/common/brandLogo_w.svg"
                      className={homeStyles.borderCircle}
                      width={40}
                      height={25}
                      alt={name}
                    />
                  </span>
                </span>
              </a>
            </Link>
          </h1>
          <div className={styles.areaList}>
            <ul className={styles.list}>
              <li className={styles.item}><Link href="/works/"><a><span>Works</span></a></Link></li>
              <li className={styles.item}><Link href="/contact/"><a><span>Contact</span></a></Link></li>
            </ul>
            <div>
              <div className={styles.menu_btn}>
                <div className={styles.trigger_inner}>
                  <a>
                    <span className={styles.trigger_lineBox}>
                      <span className={styles.trigger_lineTop}></span>
                      <span className={styles.trigger_lineBottom}></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.areaMenu}>
            <div className={styles.areaMenuInner}>
              <div  className={styles.menu_info}>
                <div className={styles.menu_ttl}>
                  <Image src="/static/image/common/brandName.svg" width={276} height={16}alt={name}/>
                </div>
                <div className={styles.men_ad}><p>152-0021</p><p>東京都目黒区東が丘 2-14-12<br />ツインフラッツ 1B</p></div>
                <div className={styles.menu_contact}>
                  <a className={styles.menu_contact_link} href="mailto:info@nb-bros.com"><span>info@nb-bros.com</span></a>
                  <a className={styles.menu_contact_link} href="tel:03-5787-5562"><span>tel : 03-5787-5562</span></a>
                </div>
                <p className={styles.menu_policy}><a href="/policy/">Privacy Policy</a></p>
                <p className={styles.menu_copy}>All rights reserved<br  class="is_forPC"/><span>©New Bridge Brothers</span></p>
                <p className={styles.menu_policy}><a href="/policy/">Privacy Policy</a></p>
                <a href="https://www.instagram.com/newbridgebrothers/" className={styles.ico_insta} target="_blank"><div></div></a>
              </div>
              <div className={styles.menu_list}>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/works/">Works</a></li>
                  <li><a href="/contact/">Contact</a></li>
                  <li><a href="/access/">Access</a></li>
                  <li><a href="/recruit/">Recruit</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.menu_bg}><span className={styles.menu_bg_top}></span><span className={styles.menu_bottom}></span></div>
          </div>
        </div>
      </header>
      <main>
        {children}
        <footer className={styles.l_footer}>
          <div className={styles.l_footer_wrapper}>
            <div className={styles.l_footer_inner}>
              <div>
                <Link href="/">
                  <a>
                    <Image 
                      src="/static/image/common/brandName.svg" 
                      className={homeStyles.borderCircle}
                      width={276}
                      height={16}
                      alt={name}/>
                  </a>
                </Link>
              </div>
              <div className={styles.l_footer_txt}>
                <div className={styles.l_footer_privacy}>
                  <Link href="/policy/"><a>Privacy Policy</a></Link>
                  <p>All rights reserved<span>©New Bridge Brothers Inc</span></p>
                  <div className={homeStyles.ico_insta}><a href="https://www.instagram.com/newbridgebrothers/" target="_blank"><div></div></a></div>
                </div>
                <div className={styles.l_footer_info}>
                  <div className={styles.l_footer_address}><p>〒152-0021</p><p>東京都目黒区東が丘 2-14-12 ツインフラッツ 1B</p></div>
                  <div className={styles.l_footer_contact}>
                    <a href="mailto:info@nb-bros.com"><span>info@nb-bros.com</span></a>
                    <a href="tel:03-5787-5562"><span>tel : 03-5787-5562</span></a>
                    <a href="https://www.instagram.com/newbridgebrothers/" className={homeStyles.ico_insta + ' forPC'} target="_blank"><div></div></a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.toTop}>
              <Link href="/">
                <a><span>Top</span></a>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}