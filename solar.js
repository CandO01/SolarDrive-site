const footerDate = document.getElementById('year')
const contactUs = document.getElementById('contact')
const modal = document.getElementById('modal')
const body = document.getElementsByTagName('body')

const dateSnapShot = new Date().getFullYear()

footerDate.textContent = `Copyright ${dateSnapShot.toString()} CandOpetgasenergy.com`

//This is the contact us button eventListener
document.addEventListener('click', (e)=>{
  e.preventDefault();
  if(e.target.id === 'contact'){
    const formEl = document.createElement('form')

  formEl.style.cssText = `
                         box-sixing: border-box;
                         width: 70%;
                         max-width: 380px;
                         height: 420px;
                         padding:0.625rem 1.25rem;
                         background: white;
                         top: 0;
                         bottom: 0;
                         right: 0;
                         left: 0;
                         position: fixed;
                         margin: auto;
                         box-shadow: 0px 0px 6px 2px #666; 
                         display: flex;
                         flex-direction: column;
                         row-gap: 10px;
                         border-radius: 4px;
                          `


  const para = document.createElement('p')
  para.textContent = 'Welcome to solar drive solar powered company a subsidiary of CandOpetgas Energy Resources Limited'
  para.style.cssText = `
                        color:#0288D1;
                        font-weight: 500;
                        font-size: 1rem;
                        font-family:'Roboto', sans-serif;
                        border-bottom: 1px dotted  gray;
                        `

  const button1 = document.createElement('button')
  button1.textContent = 'X'
  button1.style.cssText = `
                           width: 40px;
                           padding: 0.65rem;
                           font-size: 1rem;
                           text-align: center;
                           position: absolute;
                           right: 0;
                           top: 0;
                           margin-bottom: 0.6rem;
                           border: none;
                           background: transparent;
                           color: crimson;
                         `
  button1.onclick = ()=>{
    modal.style.display = 'none'
  }
  
  const label = document.createElement('label')
  label.textContent = 'Enter your name:'

  const input = document.createElement('input')
  input.type = 'text'
  input.name = 'fullName'
  input.for = 'fullName'
  input.className = 'input'
  input.placeholder = 'Enter your full name'

  const label1 =  document.createElement('label') 
  label1.textContent = 'Enter your fone number'

  const input1 = document.createElement('input')
  input1.type = 'number'
  input1.name = 'phoneNumber'
  input1.for = 'phoneNumber'
  input1.className = 'input'
  input1.placeholder = 'Enter your phone number'

  const label2 = document.createElement('label')
  label2.textContent = 'Enter your email address'
  

  const input2 = document.createElement('input')
  input2.type = 'email'
  input2.name = 'fullName'
  input2.for = 'fullName'
  input2.className = 'input'
  input2.placeholder = 'Enter your email address'

  const button = document.createElement('button')
  button.textContent = 'Submit'
  button.id = 'submit'
  button.style.cssText = `
                          padding: 0.625rem;
                          font-size: 1.125rem;
                          border-radius: 4px;
                          color: white;
                          background: #0288D1;
                          border: none
                        
                        `
  formEl.appendChild(button1)
  formEl.appendChild(para)
  formEl.appendChild(label)
  formEl.appendChild(input)
  formEl.appendChild(label1)
  formEl.appendChild(input1)
  formEl.appendChild(label2)
  formEl.appendChild(input2)
  formEl.appendChild(button)
  modal.append(formEl)

  }

  // else if(e.target.id === 'submit'){
  //   if(!input.value){
  //   return alert('Fill your name')
  //   }
  //   // else if(!input1.value){
  //   //   alert('please fill out the form')
  //   // }
  //   // else if(!input2.value){
  //   //   alert('please fill out the form')
  //   // }
  //   // else{
  //   //   alert('Form submitted!!!')
  //   // }
      
  // }
})
 

