import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.scss'
import homeStyles from '../styles/home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);


const name = 'NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）'

export default function Home() {
  const params = {
    // effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <div>
          <div>
            <div className={homeStyles.MV + ' ' + 'is_active'}>
              <div>
                <div className={homeStyles.MV_title}>
                  <div className={homeStyles.p_top_title}>
                    <p>Video &amp; Graphics Studio</p>
                    <h2>
                      <Image 
                        src="/static/image/top/brandName.svg" 
                        width={216}
                        height={116}
                        alt={name}/>
                    </h2>
                  </div>
                </div>
                <div className={homeStyles.p_top_toDown}>
                  <div className={homeStyles.p_top_sclCirc}>
                    <span className={homeStyles.p_top_sclIcon}></span>
                    <span className={homeStyles.p_top_sclBg}></span>
                  </div>
                  <p className={homeStyles.p_top_sclTxt}>
                    <span>Scroll down</span>
                  </p>
                </div>
              </div>
              <div className={homeStyles.MV_image}>
                <div className={homeStyles.MV_image_inner}>
                  <Swiper {...params}>
                    <SwiperSlide>
                      <Image 
                        src="/static/image/top/pic1.jpg" 
                        layout='fill'
                        alt={name}/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image 
                        src="/static/image/top/pic2.jpg" 
                        layout='fill'
                        alt={name}/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image 
                        src="/static/image/top/pic3.jpg" 
                        layout='fill'
                        alt={name}/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image 
                        src="/static/image/top/pic4.jpg" 
                        layout='fill'
                        alt={name}/>
                    </SwiperSlide>
                    ...
                  </Swiper>
                  <p>
                      this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js</a>.)
                  </p> 
                </div>
              </div>
            </div>
            <section className={homeStyles.secService}>
              <div className={homeStyles.secService_inner}>
                <div className={styles.tit01}>
                  <div class="animated js-anime">
                    <div className={styles.tit01_sub}>
                      <div className={styles.tit01_line}></div>
                      <span className={styles.tit01_txt}>What we do</span>
                    </div>
                    <h3 className={styles.tit01_title}><span>Our Services</span></h3>
                  </div>
                </div>
                <div className={styles.list01}>
                  <div className={styles.animated + ' js-anime'}>
                    <div className={styles.p_top_serv + ' is_forPC'}>
                      <ul className={styles.p_top_serv_cate}>
                        <li className={styles.p_top_serv_cate_item + ' is_active'}><p className={styles.p_top_drawerTtl}>Motion Graphic<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>映像表現をさらに無限に広げるモーショングラフィックス<br />コンテンツをより魅力的に、そしてメッセージを視聴者へ繋ぎます。コンテンツに合ったアイディアと表現を提供しています。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>3D CG<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>デザインからモデリング、アニメーションまでトータルに制作を行うことが可能です。さらに、実写映像への合成などあらゆる場面で3DCGを手がけています。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Edit<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>TV番組・CM・PV・MV あらゆる映像コンテンツの編集/加工を行うことが可能です。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Graphic Design<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>文字や画像の配置、大きさ、色彩、一つ一つに意味や役割を持たせ、お客様のニーズや考えをお伝えする、お手伝いをさせていただきます。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Illustration<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>弊社では、映像表現で使用するセルアニメーションや手描きアニメーションなど、表現方法の1つとして、さまざまな作品に提供しています。</p></div></li>
                      </ul>
                      <div className={styles.p_top_serv_inner}>
                        <ul className={styles.p_top_serv_txtBlock}>
                          <li className={styles.p_top_serv_txtBlock_txt + ' is_active'}><p>映像表現をさらに無限に広げるモーショングラフィックス<br />コンテンツをより魅力的に、そしてメッセージを視聴者へ繋ぎます。コンテンツに合ったアイディアと表現を提供しています。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>デザインからモデリング、アニメーションまでトータルに制作を行うことが可能です。さらに、実写映像への合成などあらゆる場面で3DCGを手がけています。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>TV番組・CM・PV・MV あらゆる映像コンテンツの編集/加工を行うことが可能です。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>文字や画像の配置、大きさ、色彩、一つ一つに意味や役割を持たせ、お客様のニーズや考えをお伝えする、お手伝いをさせていただきます。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>弊社では、映像表現で使用するセルアニメーションや手描きアニメーションなど、表現方法の1つとして、さまざまな作品に提供しています。</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.p_top_serv + ' ' + styles.is_forSP}>
                      <ul className={styles.p_top_serv_cate}>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Motion Graphic<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>映像表現をさらに無限に広げるモーショングラフィックス<br />コンテンツをより魅力的に、そしてメッセージを視聴者へ繋ぎます。コンテンツに合ったアイディアと表現を提供しています。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>3D CG<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>デザインからモデリング、アニメーションまでトータルに制作を行うことが可能です。さらに、実写映像への合成などあらゆる場面で3DCGを手がけています。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Edit<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>TV番組・CM・PV・MV あらゆる映像コンテンツの編集/加工を行うことが可能です。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Graphic Design<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>文字や画像の配置、大きさ、色彩、一つ一つに意味や役割を持たせ、お客様のニーズや考えをお伝えする、お手伝いをさせていただきます。</p></div></li>
                        <li className={styles.p_top_serv_cate_item}><p className={styles.p_top_drawerTtl}>Illustration<span><span></span><span></span></span></p><div className={styles.p_top_drawerTxt}><p>弊社では、映像表現で使用するセルアニメーションや手描きアニメーションなど、表現方法の1つとして、さまざまな作品に提供しています。</p></div></li>
                      </ul>
                      <div className={styles.p_top_serv_inner}>
                        <ul className={styles.p_top_serv_txtBlock}>
                          <li className={styles.is_active}><p>映像表現をさらに無限に広げるモーショングラフィックス<br />コンテンツをより魅力的に、そしてメッセージを視聴者へ繋ぎます。コンテンツに合ったアイディアと表現を提供しています。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>デザインからモデリング、アニメーションまでトータルに制作を行うことが可能です。さらに、実写映像への合成などあらゆる場面で3DCGを手がけています。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>TV番組・CM・PV・MV あらゆる映像コンテンツの編集/加工を行うことが可能です。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>文字や画像の配置、大きさ、色彩、一つ一つに意味や役割を持たせ、お客様のニーズや考えをお伝えする、お手伝いをさせていただきます。</p></li>
                          <li className={styles.p_top_serv_txtBlock_txt}><p>弊社では、映像表現で使用するセルアニメーションや手描きアニメーションなど、表現方法の1つとして、さまざまな作品に提供しています。</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}