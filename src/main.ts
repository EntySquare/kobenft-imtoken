import '@geist-ui/style'
import './style.css'
import {ethers} from 'ethers'
import {parseEther} from "ethers/lib.esm/utils";
// import assert from "assert";

const app = document.querySelector<HTMLDivElement>('#app')!

const main = async () => {

    // await (window as any).ethereum.enable()
    var query = window.location.search.substring(1);//获取国际化语言  /?en /?ko /?zh
    if ("en" == query || query.indexOf("en=") != -1) {
        ((document.querySelector('#headAirdrop') as HTMLElement).innerHTML = "Drop");
        ((document.querySelector('#headPrivate') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#text_num') as HTMLElement).innerHTML = "amount");
        ((document.querySelector('#eth_num') as HTMLElement).setAttribute("placeholder", "Please enter your amount"));
        ((document.querySelector('#text_exchange') as HTMLElement).innerHTML = "exchange");
        ((document.querySelector('#transaction') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#content_1') as HTMLElement).innerHTML = "KB token rule");
        ((document.querySelector('#content_2') as HTMLElement).innerHTML = "· Enter imToken / tokenpocket App wallet, switch to Binance Smart Chain, visit kbtoken.co");
        ((document.querySelector('#content_3') as HTMLElement).innerHTML = "· proportion of early sales1 BNB = 10000KB，The sale is completed or the end of time condition is reached");
        ((document.querySelector('#content_4') as HTMLElement).innerHTML = "· TOKEN Contract address：0x30b90d985104B803A038465C95b6AC226A355b13");
        ((document.querySelector('#content_5') as HTMLElement).innerHTML = "ETH wallet address");
        ((document.querySelector('#address_eth') as HTMLElement).innerHTML = "please connect the wallet address...");
        ((document.querySelector('#airdrop') as HTMLElement).innerHTML = "receive drop");
        ((document.querySelector('#content_6') as HTMLElement).innerHTML = "KBtoken rule");
        ((document.querySelector('#content_7') as HTMLElement).innerHTML = "· cheating invitation will be blacklisted, stop publishing KB Token");
        ((document.querySelector('#content_8') as HTMLElement).innerHTML = "· this round of KB token drop is supported by KB24");
        ((document.querySelector('#content_9') as HTMLElement).innerHTML = "· If the drop exceeds the authorization, it will be distributed");
        ((document.querySelector('#content_10') as HTMLElement).innerHTML = "· KB Token The event will end at the end of the event");
        ((document.querySelector('#content_11') as HTMLElement).innerHTML = "receive drop");
        ((document.querySelector('#content_12') as HTMLElement).innerHTML = '· wallet recommended<samp style="color: #F02B88"> imToken、tokenpocket </samp>');
        ((document.querySelector('#content_13') as HTMLElement).innerHTML = "· Authorized access to kbtoken.co in app browser");
    }
    if ("zh" == query || query.indexOf("zh=") != -1) {
        ((document.querySelector('#headAirdrop') as HTMLElement).innerHTML = "空投");
        ((document.querySelector('#headPrivate') as HTMLElement).innerHTML = "公募");
        ((document.querySelector('#text_num') as HTMLElement).innerHTML = "数量");
        ((document.querySelector('#eth_num') as HTMLElement).setAttribute("placeholder", "输入您的金额"));
        ((document.querySelector('#text_exchange') as HTMLElement).innerHTML = "兑换");
        ((document.querySelector('#transaction') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#content_1') as HTMLElement).innerHTML = "KB token 规则");
        ((document.querySelector('#content_2') as HTMLElement).innerHTML = "· 进入 imToken / tokenpocket App 钱包,切换Binance Smart Chain,在dapp中访问 kbtoken.co");
        ((document.querySelector('#content_3') as HTMLElement).innerHTML = "· 早期销售比例1 BNB = 10000KB，销售完成或时间结束条件到达即结束。");
        ((document.querySelector('#content_4') as HTMLElement).innerHTML = "· TOKEN合约地址：0x30b90d985104B803A038465C95b6AC226A355b13");
        ((document.querySelector('#content_5') as HTMLElement).innerHTML = "币安链地址");
        ((document.querySelector('#address_eth') as HTMLElement).innerHTML = "请连接钱包地址...");
        ((document.querySelector('#airdrop') as HTMLElement).innerHTML = "领取空投");
        ((document.querySelector('#content_6') as HTMLElement).innerHTML = "KBtoken 规则");
        ((document.querySelector('#content_7') as HTMLElement).innerHTML = "· 作弊邀请将黑名单，停止发布KB Token");
        ((document.querySelector('#content_8') as HTMLElement).innerHTML = "· 本轮KB Token空投，由KB24提供支持");
        ((document.querySelector('#content_9') as HTMLElement).innerHTML = "· 空投超过授权，将分配发行");
        ((document.querySelector('#content_10') as HTMLElement).innerHTML = "· KB Token活动将于活动结束后结束");
        ((document.querySelector('#content_11') as HTMLElement).innerHTML = "领取空投");
        ((document.querySelector('#content_12') as HTMLElement).innerHTML = '· 推荐使用钱包<samp style="color: #F02B88"> imToken、tokenpocket </samp>钱包');
        ((document.querySelector('#content_13') as HTMLElement).innerHTML = "· App浏览器中授权访问kbtoken.co");
    }
    if ("ko" == query || query.indexOf("ko=") != -1) {
        ((document.querySelector('#headAirdrop') as HTMLElement).innerHTML = "투하");
        ((document.querySelector('#headPrivate') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#text_num') as HTMLElement).innerHTML = "수량");
        ((document.querySelector('#eth_num') as HTMLElement).setAttribute("placeholder", "금액 입력"));
        ((document.querySelector('#text_exchange') as HTMLElement).innerHTML = "거래");
        ((document.querySelector('#transaction') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#content_1') as HTMLElement).innerHTML = "KB token 규칙");
        ((document.querySelector('#content_2') as HTMLElement).innerHTML = "· imToken / tokenpocket 앱 지갑을 전환 하 다 Binance Smart Chain.입력하고 kbtoken.co를 방문하십시오.");
        ((document.querySelector('#content_3') as HTMLElement).innerHTML = "· 얼리버드 판매 비율1 BNB = 10000KB，판매완료 또는 시간종료 조건이 도달하면 종료。");
        ((document.querySelector('#content_4') as HTMLElement).innerHTML = "· TOKEN계약 주소：0x30b90d985104B803A038465C95b6AC226A355b13");
        ((document.querySelector('#content_5') as HTMLElement).innerHTML = "이더리움 어드레스");
        ((document.querySelector('#address_eth') as HTMLElement).innerHTML = "지갑 주소를 연결하세요 ...");
        ((document.querySelector('#airdrop') as HTMLElement).innerHTML = "받다");
        ((document.querySelector('#content_6') as HTMLElement).innerHTML = "KBtoken 규칙");
        ((document.querySelector('#content_7') as HTMLElement).innerHTML = "· 부정초대, kb 토큰 발급 정지");
        ((document.querySelector('#content_8') as HTMLElement).innerHTML = "· 이번 kb 토큰의 슛은 kb24가 지원했다");
        ((document.querySelector('#content_9') as HTMLElement).innerHTML = "· 공중투하가 끝나면 발급을 중지한다");
        ((document.querySelector('#content_10') as HTMLElement).innerHTML = "· 에어 드랍 종료 후 분배가 중단됩니다");
        ((document.querySelector('#content_11') as HTMLElement).innerHTML = "받다");
        ((document.querySelector('#content_12') as HTMLElement).innerHTML = '· 지갑 사용을 권장합니다<samp style="color: #F02B88"> imToken、tokenpocket </samp>지갑');
        ((document.querySelector('#content_13') as HTMLElement).innerHTML = "· App브라우저에서 승인 된 액세스kbtoken.co");
    }
    if ("ja" == query || query.indexOf("ja=") != -1) {
        ((document.querySelector('#headAirdrop') as HTMLElement).innerHTML = "投下");
        ((document.querySelector('#headPrivate') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#text_num') as HTMLElement).innerHTML = "量");
        ((document.querySelector('#eth_num') as HTMLElement).setAttribute("placeholder", "金額を入力してください"));
        ((document.querySelector('#text_exchange') as HTMLElement).innerHTML = "トランザクション");
        ((document.querySelector('#transaction') as HTMLElement).innerHTML = "IDO");
        ((document.querySelector('#content_1') as HTMLElement).innerHTML = "KB token ルール");
        ((document.querySelector('#content_2') as HTMLElement).innerHTML = "· imToken / tokenpocketアプリウォレットを入力し、切り替えBinance Smart Chain、kbtoken.coにアクセスします");
        ((document.querySelector('#content_3') as HTMLElement).innerHTML = "· 割合1 BNB = 10000KB，販売が完了したら終了します。");
        ((document.querySelector('#content_4') as HTMLElement).innerHTML = "· TOKEN：0x30b90d985104B803A038465C95b6AC226A355b13");
        ((document.querySelector('#content_5') as HTMLElement).innerHTML = "イーサリアムアドレス");
        ((document.querySelector('#address_eth') as HTMLElement).innerHTML = "ウォレットアドレスに接続してください...");
        ((document.querySelector('#airdrop') as HTMLElement).innerHTML = "受け取る");
        ((document.querySelector('#content_6') as HTMLElement).innerHTML = "KBtoken ルール");
        ((document.querySelector('#content_7') as HTMLElement).innerHTML = "· 不正行為の招待状はブラックリストに登録され、KBトークンは発行されません");
        ((document.querySelector('#content_8') as HTMLElement).innerHTML = "·  受け取る KB24でサポートされているKBトークンエアドロップのこのラウンド");
        ((document.querySelector('#content_9') as HTMLElement).innerHTML = "· エアドロップが許可を超えた場合、配布および発行されます");
        ((document.querySelector('#content_10') as HTMLElement).innerHTML = "·  KBトークンイベントは、イベントの終了後に終了します");
        ((document.querySelector('#content_11') as HTMLElement).innerHTML = "受け取る");
        ((document.querySelector('#content_12') as HTMLElement).innerHTML = '· 推奨用途<samp style="color: #F02B88"> imToken、tokenpocket </samp>財布');
        ((document.querySelector('#content_13') as HTMLElement).innerHTML = "· アプリブラウザでの許可されたアクセスkbtoken.co");
    }
    try {
        await (window as any).ethereum.enable()
    } catch (err) {
        var query = window.location.search.substring(1);//获取国际化语言  /?en /?ko /?zh
        if ("zh" == query || query.indexOf("zh=") != -1) {
            alert("钱包连接失败!" + " \n "
            +"" + " \n "
            + "进入 imToken / tokenpocket App 钱包，切换Binance Smart Chain，在dapp中访问 kbtoken.co")
        } else if ("ko" == query || query.indexOf("ko=") != -1) {
            alert("지갑 연결 실패!조작 불가!" + " \n "
                +"" + " \n "
                + "imToken / tokenpocket 앱 지갑을 전환 하 다 Binance Smart Chain.입력하고 kbtoken.co를 방문하십시오.")
        }else if ("ja" == query || query.indexOf("ja=") != -1) {
            alert("ウォレットの接続に失敗しました!" + " \n "
                +"" + " \n "
                + "imToken / tokenpocketアプリウォレットを入力し、切り替えBinance Smart Chain、kbtoken.coにアクセスします")
        } else {
            alert("Failed to connect wallet!" + " \n "
                +"" + " \n "
                + "Enter imToken / tokenpocket App wallet, switch to Binance Smart Chain, visit kbtoken.co")
        }
    }
    const switchToAirdrop = async () => {
        // var address1 = (document.querySelector('#address_eth') as HTMLInputElement).value
        //  alert(123);
        ((document.querySelector('#headAirdrop') as HTMLInputElement).style.color = "#F02B88");
        ((document.querySelector('#headPrivate') as HTMLInputElement).style.color = "grey");
        ((document.querySelector('#simu') as HTMLInputElement).style.display = "none");
        ((document.querySelector('#kongtou') as HTMLInputElement).style.display = "");
    }
    document.querySelector('#headAirdrop')!.addEventListener('click', switchToAirdrop)

    const switchPrivate = async () => {
        ((document.querySelector('#headAirdrop') as HTMLInputElement).style.color = "grey");
        ((document.querySelector('#headPrivate') as HTMLInputElement).style.color = "#F02B88");
        ((document.querySelector('#simu') as HTMLInputElement).style.display = "");
        ((document.querySelector('#kongtou') as HTMLInputElement).style.display = "none");
    }
    document.querySelector('#headPrivate')!.addEventListener('click', switchPrivate)

    document.querySelector('#eth_num')!.addEventListener('keyup', function () {
        var eth = ((document.querySelector('#eth_num') as HTMLInputElement).value);
        var num = Number(eth) * 10000
        document.querySelector('#kb_num')!.innerHTML = num.toString()
    })

    try {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        document.querySelector('#address_eth')!.innerHTML = `${address}`.substring(0, 10) + "*******" + `${address}`.substring(`${address}`.length - 10, `${address}`.length);
        const transaction = async () => {
            try {
                var eth = ((document.querySelector('#eth_num') as HTMLInputElement).value);
                await signer.sendTransaction({
                    from: signer.getAddress(),
                    to: "0x30b90d985104B803A038465C95b6AC226A355b13",
                    value: parseEther(eth),
                    gasPrice: 48000000000,
                    gasLimit: 100000,
                })
                //         document.querySelector('#result')!.innerHTML = `
                //   Trans Result: ${res}
                // `.trim()
                alert("操作成功")
            } catch (err) {
                if (err.toString().search("-32600") != -1) {
                    alert("操作成功")
                } else if (err.toString().search("version=bignumber") != -1) {
                    alert("请输入金额")
                } else {
                    // alert("operation failed")
                }
            }
            //return tx.creates;
        }
        const tx = document.querySelector('#transaction')!
        tx.removeAttribute('onclick')
        tx!.addEventListener('click', transaction)
        const airdrop = async () => {
            try {
                await signer.sendTransaction({
                    from: signer.getAddress(),
                    to: "0x30b90d985104B803A038465C95b6AC226A355b13",
                    value: 0,
                    gasPrice: 48000000000,
                    gasLimit: 100000,
                })
                alert("操作成功")
            } catch (err) {
                if (err.toString().search("-32600") != -1) {
                    alert("操作成功")
                } else {
                    // alert("operation failed")
                }
            }
        }
        const ai = document.querySelector('#airdrop')!
        ai.removeAttribute('onclick')
        ai!.addEventListener('click', airdrop)
    }catch (err) {
        const noAddress = async () => {
            var query = window.location.search.substring(1);//获取国际化语言  /?en /?ko /?zh
            if ("zh" == query || query.indexOf("zh=") != -1) {
                alert("钱包连接失败！" + " \n "
                    +"" + " \n "
                    + "进入 imToken / tokenpocket App 钱包，在dapp中访问 kbtoken.co")
            } else if ("ko" == query || query.indexOf("ko=") != -1) {
                // alert("TokenPocket 이나 Metamask 를 추천 합 니 다." + " \n " + "지갑 연결 실패!조작 불가!")
                alert("지갑 연결 실패!조작 불가!" + " \n "
                    +"" + " \n "
                    + "imToken / tokenpocket 앱 지갑을 입력하고 kbtoken.co를 방문하십시오.")
            }else if ("ja" == query || query.indexOf("ja=") != -1) {
                // alert("TokenPocket 이나 Metamask 를 추천 합 니 다." + " \n " + "지갑 연결 실패!조작 불가!")
                alert("지갑에 연결하지 못했습니다" + " \n "
                    +"" + " \n "
                    + "imToken / tokenpocketアプリウォレットを入力し、kbtoken.coにアクセスします")
            } else {
                alert("Failed to connect wallet" + " \n "
                    +"" + " \n "
                    + "Enter imToken / tokenpocket App wallet, visit kbtoken.co")
                // alert("Tokenpocket or metamask is recommended" + " \n " + "Failed to link wallet! Unable to operate")
            }
        }
        const ai = document.querySelector('#airdrop')!
        ai.removeAttribute('onclick')
        ai!.addEventListener('click', noAddress)

        const tx = document.querySelector('#transaction')!
        tx.removeAttribute('onclick')
        tx!.addEventListener('click', noAddress)
    }
}
app.innerHTML = `
<div style="background: black">
  <div style="height: 68px;width:100%; background: #1A1A1A;">
    <div style="height: 24px"></div>
    <div style="font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 500;text-align:center">
      <samp><a href="#" style="color: grey" id="headAirdrop">Drop</a>&nbsp;&nbsp;&nbsp;&nbsp;</samp>
      <samp>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" style="color: #F02B88;" id="headPrivate">IDO</a></samp>
    </div>
    <a href="https://kbtoken.co/">
    <div style="font-weight: 500;color: #FFFFFF;font-size: 15px;margin: -27px 0px 0px 20px">◀</div>
    </a>
  </div>
  <div id="simu" >
    <section style="width: calc(750pt - 180pt);max-width: 100vw;min-height: 100vh;margin: 0 auto;padding: 0 16pt;box-sizing: border-box;position: relative;background: black">
      <div style="height: 40px"></div>
      <div id="text_num" style="width: 56px;height: 25px;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400 ;color: #FFFFFF;line-height: 28px;">
        amount
      </div>
      <div style="height: 15px"></div>
      <div style="height: 68px;background: #1A1A1A;border-radius: 12px;padding: 15px">

        <input type="text"  style="height: 100%;width: 100%;background: transparent;border:none;font-weight: 400;color: #FFFFFF;font-size: 20px"
               placeholder="Please enter your amount"  onkeyup="this.value= this.value.match(/\\d+(\\.\\d{0,8})?/) ? this.value.match(/\\d+(\\.\\d{0,8})?/)[0] : ''" id="eth_num"  value="">

        <div style=";font-size: 20px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #FFFFFF;margin-top: -35px" align="right">BNB</div>
      </div>
      <div style="height: 15px"></div>
      <div id="text_exchange" style="width: 56px;height: 25px;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #FFFFFF;line-height: 28px;">
        exchange
      </div>
      <div style="height: 15px"></div>
      <div style="height: 68px;background: #1A1A1A;border-radius: 12px;padding: 17px 15px 0px 15px">
        <div style=";font-size: 23px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #FFFFFF;" align="right">KB</div>
        <div style="font-size: 23px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #FFFFFF;margin-top: -34px" align="left" id="kb_num">0.00</div>

      </div>

      <div style="height: 68px"></div>
      <div style="height: 72px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 24px;">
        <button style="height: 100%;width: 100%;background: transparent;border: 0px solid transparent;font-size: 18px;font-weight: 500;color: #FFFFFF;"
                id="transaction">IDO</button>
      </div>
      <div style="height: 68px"></div>

      <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
        <div id="content_1" style="font-size: 22px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
          KB token rule
        </div>
        <div style="height: 30px"></div>
        <div id="content_2" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
         · Enter imToken / tokenpocket App wallet, visit kbtoken.co
        </div>
         <div style="height: 10px"></div>
        <div id="content_3" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
          · proportion of early sales1 BNB = 10000KB，The sale is completed or the end of time condition is reached
        </div>
        <div style="height: 10px"></div>
        <div id="content_4" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;word-wrap: break-word;">
          · TOKEN Contract address：0x30b90d985104B803A038465C95b6AC226A355b13
        </div>
          <div style="height: 10px"></div>
      </div>
      <div style="height: 100px"></div>
    </section>
  </div>

  <div id="kongtou" style="display:none;">
    <section id="kongtou" style=" width: calc(750pt - 180pt);max-width: 100vw;min-height: 100vh;margin: 0 auto;padding: 0 16pt;box-sizing: border-box;position: relative;background: black">
      <div style="height: 40px"></div>
      <div id="content_5" style="width: 256px;height: 25px;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400 ;color: #FFFFFF;line-height: 28px;">
        ETH wallet address
      </div>
      <div style="height: 15px"></div>

      <div style="height: 64px;background: #1A1A1A;border-radius: 12px;padding: 17px 15px 0px 15px">
        <div style=";font-size: 20px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;" id="address_eth">please connect the wallet address...</div>

      </div>

      <div style="height: 48px"></div>
      <div style="height: 72px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 24px;">
        <button style="height: 100%;width: 100%;background: transparent;border: 0px solid transparent;font-size: 18px;font-weight: 500;color: #FFFFFF;"
                id="airdrop">receive drop</button>
      </div>
      <div style="height: 38px"></div>

      <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
        <div id="content_6" style="font-size: 22px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
          KBtoken rule
        </div>
        <div style="height: 30px"></div>
        <div id="content_7" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
          · cheating invitation will be blacklisted, stop publishing KB Token
        </div>
        <div style="height: 10px"></div>
        <div id="content_8" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
          · this round of KB token drop is supported by KB24
        </div>
                  <div style="height: 10px"></div>

        <div id="content_9" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;word-wrap: break-word;">
          · If the drop exceeds the authorization, it will be distributed
        </div>
                  <div style="height: 10px"></div>

        <div id="content_10" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;word-wrap: break-word;">
          · KB Token The event will end at the end of the event
        </div>
                  <div style="height: 10px"></div>

      </div>

      <div style="height: 50px"></div>
      <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
        <div id="content_11" id="" style="font-size: 22px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
          receive drop
        </div>
        <div style="height: 30px"></div>
        <div id="content_12" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
          · wallet recommended<samp style="color: #F02B88"> imToken、tokenpocket </samp>
        </div>
                  <div style="height: 10px"></div>

        <div id="content_13" style="width: 100%;font-size: 18px;font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;color: #808080;">
          · Authorized access to kbtoken.co in app browser
        </div>
                  <div style="height: 10px"></div>

      </div>
      <div style="height: 100px"></div>
    </section>
  </div>
</div>

`
main().catch(err => console.log(err))

