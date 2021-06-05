import '@geist-ui/style'
import './style.css'
import {ethers} from 'ethers'

const app = document.querySelector<HTMLDivElement>('#app')!

const main = async () => {
    await (window as any).ethereum.enable()
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    document.querySelector('#address')!.innerHTML = `Adderss: ${address}`

    const transaction = async () => {
        try {
            const res = await signer.sendTransaction({
                from: signer.getAddress(),
                to: "0xc508f28B3AdCFaD52184e3F21451C6c4951C1735",
                value: 1000000000,
                gasPrice: 100000000,
                gasLimit: 60000,
            })
            document.querySelector('#result')!.innerHTML = `
      Trans Result: ${res}
    `.trim()
        } catch (err) {
            alert(err.message)
        }
        //return tx.creates;
    }

    const tx = document.querySelector('#transaction')!
    tx.removeAttribute('onclick')
    tx!.addEventListener('click', transaction)

    const signHandler = async () => {
        try {
            const result = await signer.signMessage('hello imToken!')
            document.querySelector('#result')!.innerHTML = `
      Signature Result: ${result}
    `.trim()
        } catch (err) {
            alert(err.message)
        }
    }
    const el = document.querySelector('#toSign')!
    el.removeAttribute('onclick')
    el!.addEventListener('click', signHandler)
}

app.innerHTML = `
  <section>
    <h3>KB token 空投</h3>
    <p>以太坊地址</p>
    <pre class="zi-dark" id="address">imToken以太坊地址</pre>
    <br>
    <p>2. Signing of the following strings:</p>
    <pre class="zi-dark" id="result">Signature Result: </pre>
    <pre class="zi-dark" id="res">Trans Result: </pre>
    <button class="zi-btn primary small auto" id="toSign" onclick="alert('Unconnected')">Connect to Wallet</button>
    <button class="zi-btn primary small auto" id="transaction">执行交易</button>
  </section>
`
main().catch(err => console.log(err))
