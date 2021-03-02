import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.scss'
import homeStyles from '../../styles/contact.module.scss'


export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>CONTACT | NEW BRIDGE BROTHERS（ニューブリッジブラザーズ）</title>
        </Head>
        <div class="l-framer">
          <div class="">
            <div>
              <div class="">
                <div class="">
                  <div class="title">
                    <div class="animated js-anime">
                      <h2 class="title-main"><span><span>C</span></span><span><span>O</span></span><span><span>N</span></span><span><span>T</span></span><span><span>A</span></span><span><span>C</span></span><span><span>T</span></span></h2>
                      <p class="title-sub"><span>お問い合わせ | 内容入力</span></p>
                    </div>
                  </div>
                      <div class="">
                        <p>制作・取材依頼・採用に関するご質問、ご相談は以下の必要事項をご記入の上お問い合わせください。<br />2～3営業日以内に、担当よりメールにて返信させていただきます。<br /><span>*</span> が付いているものは必須項目です。</p>
                        <div class="linkToPolicy"><a href="/policy/">プライバシーポリシーに関する内容　&gt;</a></div>
                      </div>
                      <div class="sc-34aj3v-2 gFzRVD">
                        <div class="input">
                          <dl>
                            <dt><p>種別</p><span>*</span></dt>
                            <dd class="">
                              <ul class="input-labelLst">
                                <li>
                                  <p><input type="radio" name="category" class="radio" id="radio0" value="0" />
                                  <label for="radio0">案件のご相談</label></p>
                                </li>
                                <li>
                                  <p><input type="radio" name="category" class="radio" id="radio1" value="1" />
                                  <label for="radio1">採用</label></p>
                                </li>
                                <li>
                                  <p><input type="radio" name="category" class="radio" id="radio2" value="2" />
                                  <label for="radio2">その他</label></p>
                                </li>
                              </ul>
                              <p class="input-req">必須項目を入力してください</p>
                            </dd>
                            <dt><p>お名前</p><span>*</span></dt>
                            <dd class="">
                              <input type="text" class="input-text" required="" placeholder="ex)田中太郎" name="_name" value="" />
                              <p class="input-req">必須項目を入力してください</p>
                            </dd>
                            <dt><p>会社名</p></dt>
                            <dd><input type="text" class="input-text" placeholder="ex)株式会社 NEW BRIDGE BROTHERS" name="_company" value="" /></dd>
                            <dt><p>メール</p><span>*</span></dt>
                            <dd class=""><input type="text" class="input-text" required="" placeholder="ex)sample@gmail.com" name="_mail" value="" />
                            <p class="input-req">必須項目を入力してください</p></dd>
                            <dt><p>電話</p><span>*</span></dt>
                            <dd class="">
                              <input type="text" class="input-text" required="" placeholder="ex)00000000000" name="_tel" value="" />
                              <p class="input-req">必須項目を入力してください</p>
                            </dd>
                            <dt>
                              <p>内容</p>
                              <span>*</span>
                            </dt>
                            <dd class="">
                              <textarea required="" placeholder="ex)お問い合わせ内容を入力してください。" name="_content"></textarea>
                              <p class="input-req">必須項目を入力してください</p>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div class=" ceBQOJ">
                        <div class=" izSJSI">
                          <div class="next">
                            <a><span>入力内容の確認</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
    </Layout>
  )
}