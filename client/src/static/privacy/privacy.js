import React from 'react';

import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {Helmet} from 'react-helmet';
import {Layout} from 'antd';

import './privacy.css';

const {Content} = Layout;

export default function privacy() {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Paylinx - About Us</title>
        <link rel="canonical" href="http://www.paylinx.com.au/privacy-policy" />
    </Helmet>
    <Layout>
      <Header />
      <Content>
        <div styleName="container">
          <div style={{textAlign:'center'}}styleName="lato-title">Privacy Policy</div>
          <div styleName="lato-subtitle">How to use your merchant facility</div>
          <div className="body">Our relationship with the Merchant is governed by two documents: the Merchant Application and these general terms (together “Agreement”). They should be read together and become binding on both parties immediately upon approval of the Application.</div>
          <div className="body">Agreement between the Merchant (herein after referred to as “Merchant”) and Paylinx Pty Ltd (ABN 97 610 301 516) of Suite 2903, 31 Market Street, Sydney NSW 2000 (herein after referred to as “Paylinx”) in accordance with section 127 of the Corporations Act 2001.</div>
          <div styleName="lato-subtitle">INTRODUCTION</div>
          <ul styleName="letter-list">
          <li className="body">WeChat Pay, a leading payment platform distributed in Australia by Paylinx, is dedicated to providing efficient and professional cross-border online and offline payment services to e-commerce users in Australia;</li>
          <li className="body">The Merchant hereby accepts this WeChat Pay Cross-border Acquiring Service Agreement (Agreement) for online and offline trading of goods or services;</li>
          <li className="body">Via the WeChat Pay Cross-border Acquiring Service, a User may use RMB currency (a foreign currency) to purchase products sold by the Merchant through WeChat Pay Service, and the Merchant shall receive the sale proceeds via a subsequent funds transfer performed by Paylinx.</li>
          </ul>
          <div styleName="lato-subtitle">1. MEANINGS OF WORDS</div>
          <div className="body">Unless otherwise specified, the following terms herein shall be defined as follows:</div>
          <div className="body"> <span styleName="lato-ssubtitle">“Acquiring Device“</span> shall mean the communication device installed by the Merchant able to support the following functions:</div>
          <ul styleName="letter-list">
          <li className="body">QR code scanning or displaying technology;</li>
          <li className="body">processing the information from commercial transactions and payment orders,</li>
          </ul>

          <div className="body">including offline and online payments. It can be used to interact with financial transaction information and the exchange information according to the payment order, including online payment and offline payment.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Business Day “</span> shall mean a day (other than a Saturday, Sunday or public holiday) in New South Wales, Australia.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Change of Control “</span>shall mean in relation to a corporation, where the power (whether formal or informal, whether or not having legal or equitable force, whether or not based on legal or equitable rights and whether direct or indirect, including through one or more entities):</div>
          <ul styleName="letter-list">
          <li className="body">to control more than half of the voting power of the corporation;</li>
          <li className="body">to control the composition of the board of directors of the corporation; or</li>
          <li className="body">to control more than half of the issued share capital of the corporation excluding any part thereof which carries no right to participate beyond a specified amount in the distribution of either profit or capital, resides with persons other than those holding that power on the date of this Agreement.</li>
          </ul>
          <div className="body"><span styleName="lato-ssubtitle">“ Charge Rate “</span>shall mean the rate as set out in the merchant business account application.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Government Agency “</span>shall mean a government or government department, a governmental, semi-governmental or judicial person including a self-regulatory organisation established under statute and a person (whether autonomous or not) charged with administration of any applicable law.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Loss “</span>shall mean any claim, cost (including legal costs on a solicitor and client basis) debt, losses, liabilities, damages, obligation, allegation, suit, action, demand, cause of action, proceeding or judgement, costs, charges and expenses of any kind however calculated or caused, and whether direct or indirect, incidental or economic, including any decrease in the value of the Shares, whether or not realised and includes taxes.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Merchant Platform Login Account “ </span>shall mean the account assigned to the Merchant for the purposes of enabling the Merchant to login to the Merchant Platform and manage and conduct operations in its Merchant Account. If the Merchant’s application for the Merchant Account is successful, Paylinx will provide written notice to the Merchant to provide the Merchant with the Merchant Platform Login Account and the initial password. The Merchant may operate the Merchant Account within the system’s allowable functions, such as changing the aforesaid initial password on the Merchant Platform, setting up multiple related login accounts and corresponding passwords according to its own needs, and determining its operation permission rules.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Relevant Country “</span>shall mean Australia.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ Safety Certificate “ </span>shall mean a secure document linked with its Merchant Account (as applied for by the Merchant) and issued by Paylinx, containing the identification information of the Merchant and the WeChat Pay Cross-border Service system authority (including account enquiries, transfer funds or chargeback). The Merchant may use the Safety Certificate as its digital signature to verify electronic instruction with Paylinx.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ User or Customer “</span>shall mean a buyer who purchases products or services from the Merchant by using the WeChat Pay Service.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat ”</span>shall mean the multi-platform messenger and communication tool developed by Tencent Holdings Limited, supporting single-user and multi-user participation, transmission of voice, short message, video, image and text, and other instant messaging services, and is composed of various development tools, convenience tools, WeChat Public Accounts, open platforms and other associated software systems and services.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Pay Cross-border Acquiring Service “</span>shall mean the WeChat Pay Service accessible by the Merchant, the scope of which is subject to clause 2.22.1, such that:</div>
          <ul styleName="letter-list">
          <li className="body">the Merchant may access and use the WeChat Pay Service in its course of business when entering into retail transactions; and</li>
          <li className="body">the Merchant is able to receive the funds from the Customer’s payment for the purchase price for goods and services in Australian dollars, through a funds transfer service performed by Paylinx.</li>
          </ul>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Pay Cross-border Acquiring Service Handling Fees “</span>is defined under clause 6.2.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Pay Merchant Account “</span>shall mean the account allocated to the Merchant by Paylinx, which is used to store the Merchant’s identification and transaction information to allow for processing of the transaction, and enables the Merchant to enquire or calculate pre- payments, trade receivables and payables. WeChat Pay Merchant Account will be directly linked to the legitimate bank account provided by the Merchant.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Pay Merchant Platform or Merchant Platform ”</span>shall mean a software system that is distributed by Paylinx, and is accessible by the Merchant to do all such acts as may be required in its course of business, including managing its WeChat Pay Merchant Account and conducting marketing and promoting activities. The functionalities available to the Merchant on the Merchant Platform are subject to change from time to time as may be determined by Paylinx in its sole discretion.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Pay Service “</span>shall mean the WeChat third-party payment system and funds transferring services made available by Paylinx to the Merchant in accordance with this Agreement, including online and offline WeChat payments.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Public Account “</span>shall mean the account registered by the Merchant via the WeChat Public Platform and is used to log in the WeChat Public Platform.</div>
          <div className="body"><span styleName="lato-ssubtitle">“ WeChat Public Platform “</span>shall mean the internet technology service platform provided to the Merchant, which is used to release information and for the Merchant to communicate and interact with its customers.</div>
          <div styleName="lato-subtitle">2.CONTENTS OF SERVICES</div>
          <div className="body">2.1 Paylinx provides Customers with access to the WeChat Pay Service in order for Customers to complete payment transactions through WeChat Pay. The scope of WeChat Cross-border Acquiring Service is set out as below. The Merchant may apply to subscribe for the below services, with the grant of subscription to the services to be determined by Paylinx in its sole discretion.</div>
          <ul styleName="letter-list">
          <li className="body">In-App Web-based Payment: means one of the WeChat Pay Services used by WeChat users under the WeChat Public Account, while the goods or services are displayed through WeChat Public Platform;</li>
          <li className="body">In-APP Payment: the Merchant may embed a store inside its official app (application) to display its goods and services, while the User interacts with the app to purchase through WeChat Pay Service;</li>
          <li className="body">QUICKPAY: the Merchant accesses the WeChat Pay Service by scanning the QR code on Users’ devices, while the goods or services are displayed in the Merchant’s offline store;</li>
          <li className="body">QR Code Payment: the Users access the WeChat Pay Service by scanning the QR codes provided by the Merchant.</li>
          </ul>
          <div className="body">2.2 The proceeds of transactions completed using the above services will be paid to the Merchant through a funds transfer service provided by Paylinx.</div>
          <div className="body">2.3 WeChat Pay Cross-border Acquiring Service may only be used for goods or services transacted within the Merchant’s business scope which is submitted by the Merchant to and approved by Paylinx, and each order shall not exceed the amount limit as provided by Paylinx.</div>
          <div className="body">2.4 By subscribing for the WeChat Pay Cross-border Acquiring Service, the Merchant acknowledges and agrees that Paylinx has the right to adjust the Merchant’s transaction amount limit from time to time in accordance with the types of goods or services transacted as part of the business operated by the Merchant and the risk profile of the Merchant’s business activities.</div>
          <div styleName="lato-subtitle">3.SECURITY</div>
          <div styleName="body">Safekeeping of Confidential Information</div>
          <div className="body">3.1 The Merchant must keep all password, Personal Identification Number (PIN) and Safety Certificate associated with the WeChat Pay Cross-border Acquiring Service confidential at all times (Confidential Information), and must not disclose to or allow access or use by any third party in any manner whatsoever without the prior written consent of Paylinx. The Merchant Account shall act as a valid proof for Paylinx to confirm the identity of the Merchant.</div>
          <div className="body">3.2 The Merchant shall be solely responsible for all operations under the Merchant Account and do all such acts as to manage and maintain the Confidential Information, including but not limited to:</div>
          <ul styleName="letter-list">
          <li className="body">securely keeping and storing the Confidential Information of the Merchant Account;</li>
          <li className="body">maintaining effective physical protection of the device as well as technicalprotection of the Confidential Information.</li>
          </ul>
          <div styleName="body">Notification of unauthorised disclosure of Confidential Information</div>
          <div className="body">3.3 In the event that the Confidential Information has been disclosed to a third party or subject to unauthorized use by a third party, upon becoming aware, the Merchant must immediately notify Paylinx.</div>
          <div className="body">3.4 Upon receipt of the notice as per clause 3.3 Paylinx may:</div>
          <ul styleName="letter-list">
          <li className="body">after verifying the identification information of the Merchant, proceed with written notification to the Merchant with respect to the unauthorized disclosure and confirmation of that the notification is effective; and</li>
          <li className="body">after providing formal notification to the Merchant, suspend the Merchant Account’s payment function from use, however account receivables may continue to be remitted to the account.</li>
          </ul>
          <div className="body">3.5 The Merchant shall be responsible and liable for any Loss resulting from the operations of the Merchant Account, whether by the Merchant or otherwise, prior to confirmation that the notification under clause 3.4(b) is effective.</div>
          <div styleName="body">Communication of Unauthorised Disclosure</div>
          <div className="body">3.6 With respect to matters contemplated by clauses 3.3 and 3.4, and with respect to any cancellation of the notifications contemplated by clauses 3.3 and 3.4, the parties shall communicate with each other by telephone or e-mail address specified in this Agreement only. System Security</div>
          <div className="body">3.7 The parties each shall be responsible for the security of their respective IT systems and the related procedures, and undertake to each other that their respective IT systems and the related procedures are free from “trapdoor”, “logic bomb”, “data theft” and any other software that may threaten the system security of the other party.</div>
          <div styleName="body">Communication of Unauthorised Disclosure</div>
          <div styleName="lato-subtitle">4. RIGHTS AND OBLIGATIONS OF THE MERCHANT</div>
          <div styleName="body">Accuracy and collection of information</div>
          <div className="body">4.1 All information provided by the Merchant to Paylinx must be true and accurate. Such information includes, but not limited to:</div>
          <ul styleName="letter-list">
          <li className="body">The nature of the business and its operation;</li>
          <li className="body">business licenses (including a certification or incorporation documents issued by a Government Agency);</li>
          <li className="body">ICP (Internet Content Provider) license;</li>
          <li className="body">identification of the Merchant’s contact person or its authorized representative;</li>
          <li className="body">the letter of settlement bank account information; and</li>
          <li className="body">corporate e-mail address (other than personal e-mail account).</li>
          </ul>
          <div className="body">4.2 The Merchant undertakes to Paylinx that its use of the WeChat Pay Service shall be based on genuine transactions. If Paylinx requests, the Merchant must provide sufficient evidence to prove the existence of a transactional relationship between the User and the Merchant.</div>
          <div className="body">4.3 The Merchant must ensure the legitimacy, authenticity, accuracy and completeness of the order information. When accepting orders from Users, the Merchant shall record all relevant information, including but not limited to, the name and mobile phone number of the User, and the product name, product number, price per unit, total price charged and delivery information of the product ordered.</div>
          <div className="body">4.4 The Merchant shall properly keep the relevant transaction information and proof of transaction, including but not limited to, the order and the relevant receipt signed by the customer when purchasing the goods for a period of at least five (5) years following the date on which the transaction takes place.</div>
          <div styleName="body">Approvals</div>
          <div className="body">4.5 If the Merchant is engaged in a business that requires approval, licence or authority to be granted by a Government Agency in accordance with the laws of the Relevant Country, the Merchant must provide a copy of the relevant approval, licence or authority to Paylinx.</div>
          <div className="body">4.6 The Merchant shall not reprint, distribute, copy, cut out or tamper with the contents on the website of Paylinx or use any part of such content as part of any other material without the written authorisation from Paylinx. Without the prior written authorisation from Paylinx, the Merchant shall not display the link to WeChat Pay Service in any third party website or application.</div>
          <div styleName="body">Technology</div>
          <div className="body">4.7 The Merchant is responsible for the set-up of its own hardware platforms and the costs incurred in the installation, operation or upgrade of such hardware. The Merchant shall properly develop, debug, operate and maintain its own IT system and to ensure the security of its own IT system. The Merchant is responsible for clarifying and confirming with Paylinx the specific requirements of the transmission protocol, security system, hardware requirements, physical connection and details of other technical compatibility. The Merchant shall adopt all such IT systems and technology acknowledged and approved by Paylinx in order to ensure the security, stability and compatibility of the parties’ IT systems and software. The Merchant shall not use any equipment or human resources that may adversely affect information security and shall put in place effective measures to protect the security and confidentiality of payment information data during the transmission process.</div>
          <div className="body">4.8 The Merchant shall not disclose or transfer the interface technology, security protocol or certificate provided under this Agreement to a third party for any purposes beyond the scope of this Agreement without the prior written consent of Paylinx, or pass-off other parties’ transaction as its own transactions in settling accounts with Paylinx.</div>
          <div className="body">4.9 All actions operating the WeChat Public Account and WeChat Pay Merchant Account are deemed as those of the Merchant.</div>
          <div className="body">4.10 The Merchant undertakes and warrants that it will categorise goods to be sold via the WeChat Pay Merchant Account or WeChat Pay Cross-border Acquiring Service into “physical goods + real name”, “flight ticket and 3C” and “virtual products” respectively (“physical goods + real name” means the physical goods which require logistics delivery, or goods or services which require recording and verifying the true identity of the purchaser upon purchase; “flight ticket and 3C” means flight ticket, computer, communication and consumer electronics; and “virtual products” means non-physical goods and services that do not record the true identity of the purchaser, nor require logistics delivery). Goods or services which are transacted without the use of WeChat Pay Cross-border Acquiring Service shall not be included in the WeChat Pay Merchant Account.</div>
          <div className="body">4.11 The Merchant is responsible for the development, procurement and installation of Acquiring Device and its associated costs and cost of repair and maintenance. The Merchant must strictly adhere to certified practices of use of the Acquiring Device, and is responsible for the safe and secure transmission of information. The Merchant must operate the Acquiring Device with due diligence and care, such that:</div>
          <ul styleName="letter-list">
          <li className="body">The Acquiring Device position should be stable, safe and easy to operate;</li>
          <li className="body"> The Acquiring Device should avoid direct sunlight, high temperature, dampness or magnetic fields;</li>
          <li className="body">The power supply, communication lines should be compatible with the safe functioning of the Acquiring Device application;</li>
          <li className="body">other conditions required for normal use of acquiring equipment.</li>
          <li className="body">Paylinx shall not be liable for any loss, directly or indirectly suffered as a result of</li>
          </ul>
          <div className="body">not being able to access the WeChat Pay Cross-border Acquiring Service due to the installation, operation and maintenance of the Acquiring Device by the Merchant.</div>
          <div className="body">4.12 The Merchant shall use the Acquiring Device within the scope of the Agreement. Without Paylinx written consent, the Merchant shall not transfer, rent, lend, mortgage, pledge, lien or in any other way to dispose of the Acquiring Device. The Merchant shall not transfer the Acquiring Device arbitrarily or move it to the other place of business, and any Loss incurred by the Customer or Paylinx as a result of such actions shall be borne by the Merchant.</div>
          <div className="body">4.13 The Merchant shall display, hang up or otherwise maintain the accepted “WeChat Pay” logo at a prominent position on the Acquiring Device, business premise or official website, such that a User may reasonably identify the Merchant as a subscriber of the WeChat Pay Cross-border Acquiring Service. The Merchant shall not use “WeChat Pay”, “Paylinx” and related business logos and trademarks for any other purposes beyond the scope of this Agreement.</div>
          <div className="body">4.14 The Merchant shall only use the Acquiring Device and the receiving bank settlement account for the purpose as permitted by this Agreement. The Merchant warrants that its use of the WeChat Pay Cross-border Acquiring Service shall not breach the scope of its business as notified to Paylinx.</div>
          <div className="body">4.15 The Merchant may not charge Customers any additional fees, or alter its quality of service for using WeChat Pay Service.</div>
          <div styleName="body">Change of business details and change of control</div>
          <div className="body">4.16 If the Merchant changes its address, suspends its business, or changes its domain name or contact number and other Merchant information, it must provide written notification to Paylinx in advance. Paylinx may exercise to its sole discretion to suspend the provision of services under this Agreement in the event of failure to provide timely notice, and all complaints, third party claims, Losses and disputes resulting from the failure to provide timely notice shall be assumed by the Merchant.</div>
          <div className="body">4.17 The Merchant must obtain Paylinx prior written approval (and such approval may not be unreasonably withheld or delayed) in respect of any Change of Control of the Merchant.</div>
          <div className="body">4.18 The Merchant must not engage in or assist the User to engage in illegal credit card cash-out, money laundering, split transaction and other illegal business activities, or engage in false application, skimming, malicious acts or any such act which may contravene any law of Australia, otherwise Paylinx is entitled to suspend or terminate the provision of the service under this Agreement.</div>
          <div className="body">4.19 The Merchant agrees that it shall use best endeavours to take measures and precautions against illegal transaction by Customers, and warrants that it will promptly resolve all problems and issues relating to customer service. In the event that Paylinx or any Users suffers any Loss arising from the circumstances in the course of transaction, including but not limited to: fraud, theft, disguised transaction, chargeback, unauthorized account information disclosure, violation of applicable laws, rules and regulations, breach duties prescribed in this Agreement, the Merchant shall be responsible for all such claims and losses. Paylinx is entitled to apply any deposit paid by the Merchant to compensate the Users or Paylinx for Loss suffered as a result of such circumstances. Where the deposit is insufficient to compensate for the Loss, Paylinx may directly deduct difference between the Loss and the deposit from the Merchant’s amount to be settled or otherwise make a claim against the Merchant.</div>
          <div styleName="lato-subtitle">5. RIGHTS AND OBLIGATIONS OF PAYLINX</div>
          <div styleName="body">Provision of services</div>
          <div className="body">5.1 Paylinx is responsible for providing the Merchant with access to the WeChat Pay Cross- border Service Platform. Details of the Terms and Conditions of WeChat Pay Cross-border Service Platform are set out on Paylinx website. Except as otherwise provided by law, Paylinx is entitled to add to, delete or otherwise change any part of the Terms and Conditions of WeChat Pay Cross-border Service Platform from time to time. Paylinx will provide reasonable notice on its website of any such proposed change prior to the change taking effect. If the Merchant does not notify Paylinx in writing to dispute the proposed change prior to the change coming into effect, it shall be deemed to have agreed to such change or amendment.</div>
          <div className="body">5.2 Paylinx is responsible for providing the Merchant with access to the online transaction inquiry system and inquiry interface of WeChat Pay Cross-border Acquiring Service, which provides the Merchant with Merchant transaction information management and inquiry services.</div>
          <div className="body">5.3 After this Agreement takes effect and subject to the merchant’s subscription to the WeChat Pay Cross-border Acquiring Service being granted by Paylinx, Paylinx shall provide Merchant Account and Safety Certificate services.</div>
          <div className="body">5.4 Paylinx is responsible for providing the funds transfer services as set out at clause 2.2, and is responsible for providing the Merchant only with access to the remainder of the WeChat Pay Cross-border Acquiring Service. Any dispute or claim between the Merchant and Users or other third party entities shall be dealt with solely by the Merchant and Paylinx will not partake in, bear responsibility for or be liable for any such dispute or claim.</div>
          <div styleName="body">Right to suspend or terminate service</div>
          <div className="body">5.5 Paylinx may at any time, review the nature of the business of the Merchant. Paylinx is entitled to suspend or terminate the Merchant’s access to the service in accordance with this Agreement if the Merchant engages in any business activity that is inconsistent with the information provided to Paylinx by the Merchant, any provisions of this Agreement or breaches any relevant laws and regulations.</div>
          <div className="body">5.6 Where the Merchant has not generated any transaction amount by WeChat Pay Cross- border Acquiring Service for ninety consecutive days, Paylinx is entitled to terminate this Agreement by written notice to the Merchant and will not assume any liability, legal or otherwise</div>
          <div styleName="body">Authorisations</div>
          <div className="body">5.7 If the Merchant applies to open a WeChat Public Account, it shall be deemed as authorizing the WeChat Public Platform to issue relevant transaction instructions. Paylinx is entitled to carry out payment operations based on the instructions issued by WeChat Public Platform,and all disputes and legal responsibilities arising therefrom shall be assumed solely by the Merchant.</div>
          <div className="body">5.8 The Merchant who uses this service shall be deemed as authorizing Paylinx to collect and use in a reasonable manner any information or data generated during the Merchant’s use of WeChat Pay Cross-border Acquiring Service, including but not limited to account information, business identification information and transaction information. Paylinx is entitled to access and use the abovementioned information or data for the betterment of its product or service and any business development activities.</div>
          <div styleName="body">Deductions</div>
          <div className="body">5.9 Paylinx may directly deduct the relevant amount from the WeChat Pay Merchant Account equivalent to any Loss as a result of:</div>
          <ul styleName="letter-list">
          <li className="body">The Merchant failing to make a payment to Paylinx in accordance with the provisions of this Agreement; or</li>
          <li className="body"> The Merchant’s breach of this Agreement causing losses to Paylinx or other entities.</li>
          </ul>
          <div styleName="lato-subtitle">6. SERVICE FEES AND SETTLEMENT OF TRANSACTION</div>
          <div styleName="body">Handling Fees</div>
          <div className="body">6.1 The Merchant shall pay the relevant WeChat Pay Cross-border Acquiring Service Handling Fees to Paylinx.</div>
          <div className="body">6.2 WeChat Pay Cross-border Acquiring Service Handling Fees shall be a sum equal to each transaction amount completed by the Merchant under its Merchant Account multiplied by Charge Rate for WeChat Pay Cross-border Acquiring Service. The Charge Rate is set out in the merchant business account application.</div>
          <div className="body">6.3 Paylinx shall be entitled to debit directly the abovementioned WeChat Pay Cross-border Acquiring Service Handling Fees from each transaction amount under the Merchant Account.</div>
          <div className="body">6.4 In the event that a change to any Australia law or regulation affects the operation of this Agreement, Paylinx is entitled to unilaterally adjust the Charge Rate for WeChat Pay Cross- border Acquiring Service and shall notify the Merchant by written notice. The Merchant acknowledges and agrees that if the Merchant does not dispute the adjusted Charge Rate for WeChat Pay Cross-border Acquiring Service in writing within five (5) Business Days after receiving the written notice from Paylinx under this clause, the adjusted Charge Rate will apply.</div>
          <div className="body">6.5 The parties acknowledge the minor discrepancies that may arise from rounding down or up to two decimal places during the settlement of fees under this Agreement.</div>
          <div className="body">6.6 Settlement of the transaction:</div>
          <ul styleName="letter-list">
          <li className="body">Paylinx shall, after deducting all service fees payable to Paylinx from the corresponding transaction payment of the Merchant, remit the balance to the Merchant by way of electronic remittances transfer to the bank account designated by the Merchant in Australian dollars or otherwise as agreed by the parties. The Merchant’s bank account and currency are set out in the merchant business account application;</li>
          <li className="body">in the event that the Merchant changes the bank account for any reason, The Merchant shall promptly provide written notification to Paylinx of such change and provide any other information required by Paylinx. If the Merchant changes the bank account but fails to promptly notify Paylinx, any additional costs or losses so incurred shall be borne by the Merchant;</li>
          </ul>
          <div styleName="body">Settlement Period</div>
          <div className="body">6.7 Settlement shall be made based on the merchant business account application, which means a transaction on T day shall be settled as set out in the merchant business account application form of this Agreement (in case of an Australian public holiday, settlement shall be made on the Business Day following the public holiday).</div>
          <div className="body">6.8 The Merchant acknowledges and agrees that the actual time of receipt of payment is subject to the usual operation and period of settlement of the intermediary bank.</div>
          <div className="body">6.9 Paylinx is entitled to adjust the settlement period on the basis of the Merchant’s state of business operation, any change to the nature of the Merchant’s business and actual payment status. Paylinx must notify the Merchant in writing with respect to such adjustment to the settlement period.</div>
          <div className="body">6.10 In the event of inconsistency between the reconciliation data of the Merchant and those of Paylinx, the data of Paylinx shall prevail. </div>
          <div className="body">6.11 Any international transaction fees for transfer of settlement payment to be received by the Merchant from the foreign banks to an Australian bank shall be borne by Paylinx, and all other charges such as the costs of intermediary banks or receiving banks shall be borne by the Merchant.</div>
          <div styleName="lato-subtitle">7. REFUND</div>
          <div className="body">7.1 The Merchant may not refund any amount to the Customer in any way other than in accordance with clause 8.2 or otherwise required to do so by Australian Consumer Law.</div>
          <div className="body">7.2 Refund arising from the transactions of the Merchant will be handled in accordance with the following provisions:</div>
          <ul styleName="letter-list">
          <li className="body">The Merchant must make a request to Paylinx for a refund, and notify Paylinx whether the refund amount is to be directly deducted by Paylinx from the account of the Merchant.</li>
          <li className="body">In the event that the refund amount is to be directly deducted by Paylinx from the account of the Merchant, Paylinx will approve the request and refund the Customer the refund amount of lodgement of refund request by the Merchant.</li>
          <li className="body">In the event that the refund amount is not to be directly deducted by Paylinx from the account of the Merchant, Paylinx will deduct the refund amount when there is a sufficient amount of unsettled funds to meet the refundable amount. Paylinx will approve the request and refund the Customer the refund amount of deduction of the refund amount by Paylinx from the account of the Merchant.</li>
          </ul>
          <div styleName="lato-subtitle">8. REQUESTS AND COMPLAINTS</div>
          <div className="body">8.1 In the event that Paylinx provides a notice to the Merchant requesting for the provision of any information regarding orders or other such inquiry, the Merchant must reply and provide all such requested information including original receipts and relevant transaction records to Paylinx via e-mail or otherwise in writing within three (3) Business Days after receiving such notice from Paylinx.</div>
          <div className="body">8.2 The Merchant shall provide reasonable assistance to Paylinx if so requested by Paylinx in dealing with Users’ complaints regarding payment service.</div>
          <div styleName="lato-subtitle">9. CONFIDENTIALITY AGREEMENTS</div>
          <div className="body">9.1 Unless otherwise provided herein, neither party shall disclose to any third party the contents of this Agreement, the users’ personal information, the Customers’ payment information, and the interface technology, security protocol and certificate without the written consent of the other party.</div>
          <div className="body">9.2 The parties shall keep confidential the trade secret and know-how obtained during the performance of this Agreement. Paylinx is entitled to disclose the relevant business information of the Merchant in any of the following situations:</div>
          <ul styleName="letter-list">
          <li className="body">when required to do so by law or any regulatory authority, provided that the disclosing party must first inform the other party of that requirement and restrict any disclosure to the minimum amount of information which is required in order to comply with that requirement or</li>
          <li className="body">the Customer lodges a complaint about the Merchant and requests Paylinx to supply relevant business information of the Merchant.</li>
          <li className="body">the business information referred to herein includes but is not limited to the transaction order number, transaction proof, flow of funds and other transaction information between the Merchant and the Customers.</li>
          </ul>
          <div className="body">9.3 The parties warrant that each of its employees and agents shall fulfil the confidentiality obligation provided in this clause.</div>
          <div className="body">9.4 In addition, the Merchant recognizes that Paylinx is part of a group of multiple legal entities and that it may be necessary for Paylinx to provide the Confidential Information to its Affiliates (as defined below). For this purpose, the Merchant agrees (both as the disclosing party and as the receiving party hereunder) that:</div>
          <ul styleName="letter-list">
          <li className="body">Paylinx may disclose the Confidential Information to its Affiliates but only to the extent that such Affiliate has a need to know for the purpose of carrying out the aforementioned Purpose; and</li>
          <li className="body">disclosure by or to an Affiliate of Paylinx shall be deemed to be a disclosure by or to Paylinx itself; and</li>
          <li className="body">Paylinx shall be responsible for the observance and proper performance by all of its Affiliates of the terms and conditions of this Agreement; and</li>
          <li className="body">Paylinx may disclose Confidential Information to its subcontractors but only to the extent that such subcontractor has a need to know for the purpose of carrying out the aforementioned Purpose and provided that such subcontractor accepts confidentiality obligations at least as restrictive as those contained in this Agreement.</li>
          </ul>
          <div className="body">For the purpose of this Agreement, “Affiliate” shall mean any entity directly or indirectly Controlling, Controlled by or under common Control with Paylinx. “Control”, including related terms such as “Controls”, “Controlling”, “Controlled by” or “under common Control with”, means the possession, now or hereafter, directly or indirectly, of the power to direct or cause the direction of the management and policies of the controlled entity, whether through the ownership of voting securities, by contractual arrangements or otherwise, and without limiting the generality of the foregoing, such ability shall be deemed to exist when any entity holds or controls voting proxies with respect to at least fifty percent (50%) of the outstanding voting securities or other ownership interests of the controlled entity.</div>
          <div className="body">9.5 The confidentiality obligations set out in this clause 0 shall survive the termination of this Agreement.</div>
          <div styleName="lato-subtitle">10. BREACH</div>
          <div className="body">10.1 A party’s breach of the obligations provided in this Agreement constitutes a breach of contract by that party.</div>
          <div className="body">10.2 Paylinx is entitled to unilaterally terminate this Agreement and require the Merchant to assume the liability to compensate for any Loss suffered resulting from where the Merchant:</div>
          <ul styleName="letter-list">
          <li className="body">is directly or indirectly involved in any fraud;</li>
          <li className="body">is unable to conduct normal business operations due to the inability to meet its financial obligations;</li>
          <li className="body">breaches any Australian laws or regulations;</li>
          <li className="body">rejects or intentionally delays the query and inspection requests of Paylinx without reasonable justification;</li>
          <li className="body">is in winding up proceeding, being dissolved, or having its business license revoked;</li>
          <li className="body">commits any act that harms the legal or proprietary interest of Paylinx;</li>
          <li className="body">engages in illegal activity by using the services provided by Paylinx;</li>
          <li className="body">is involved in abnormal transactions in Paylinx reasonable opinion.</li>
          </ul>
          <div styleName="lato-subtitle">11. FORCE MAJEURE</div>
          <div className="body">11.1 Force majeure means an event that is unforeseeable, unavoidable, insurmountable and beyond the reasonable control of the affected party. If the supply of WeChat Pay Cross-border Acquiring Service is affected, interrupted or restricted as a result of any force majeure event, either party is entitled to suspend, reduce and/or cancel the provision of WeChat Pay Cross- border Acquiring Service during the period of interruption or restriction without liability.</div>
          <div className="body">11.2 Immediately following the occurrence of the force majeure event, the party immediately affected by the force majeure event must notify the other party and use best endeavours to remove or remedy the force majeure event as quickly as possible and to mitigate any Loss which may be suffered as a consequence of the force majeure event.</div>
          <div styleName="lato-subtitle">12. MARKET RISK</div>
          <div className="body">12.1 The parties are fully aware of the current market condition that the domestic e- commerce environment is not yet fully mature, and there are associated risks of conducting e- commerce business. The parties undertake to take reasonable risk prevention measures to avoid or minimize such risks associated with the e-commerce market. </div>
          <div styleName="lato-subtitle">13. APPLICABLE LAW</div>
          <div className="body">13.1 The Agreement is governed by the laws of New South Wales. Each party irrevocably and unconditionally submits to the non-exclusive jurisdiction of the courts of New South Wales and waives, without limitation, any claim or objection based on absence of jurisdiction or inconvenient forum.</div>
          <div className="body">13.2 With respect to any disputes arising out of this Agreement, the parties must use reasonable endeavours to engage in negotiation or mediation, prior to seeking litigious means of dispute resolution.</div>
          <div styleName="lato-subtitle">14. TERM, AUTOMATIC RENEWAL AND EARLY TERMINATION</div>
          <div className="body">14.1 The Agreement is effective upon the date of this Agreement. The term of this agreement is one (1) year.</div>
          <div className="body">14.2 In the event that the parties fail to request in writing for termination of this Agreement one (1) month prior to the first and any subsequent expiration of this Agreement, this Agreement shall be deemed to be extended for one (1) year automatically without limitation. 14.3 Based on their respective business operation needs, the parties are entitled to the early termination of this Agreement without assuming any legal responsibilities. The party seeking an early termination of this Agreement must notify the other party in writing one (1) month in advance.</div>
          <div className="body">14.3 Based on their respective business operation needs, the parties are entitled to the early termination of this Agreement without assuming any legal responsibilities. The party seeking an early termination of this Agreement must notify the other party in writing one (1) month in advance.</div>
          <div className="body">14.4 Clauses 6, 8 and 10 with respect to the deposit, refund and confidentiality obligations survive termination of this Agreement.</div>
          <div className="body">14.5 If any reduced special rates are put in place, Paylinx will be the merchant’s exclusive provider for WeChat Pay for a period of 12 months.</div>
          <div styleName="lato-subtitle">15. MISCELLANEOUS</div>
          <div className="body">15.1 Any addition or amendment to the Agreement shall be made only in writing after being signed or sealed by the parties.</div>
          <div className="body">15.2 The Agreement shall include:</div>
          <div styleName="body">Business Account Application Form</div>
          <div className="body">15.3 The business account application form hereto shall form an integral part of the Agreement, and shall have same legal effects as the text of the Agreement. In the event of any inconsistency between the Agreement and the attachments, the attachments shall prevail. 15.4 The Agreement may be signed in counterparts and all counterparts taken together constitute one document.</div>
          <div className="body">15.4 The Agreement may be signed in counterparts and all counterparts taken together constitute one document.</div>
          <div className="body">15.5 Unless otherwise agreed by the parties, all notices stipulated by this Agreement shall be given by courier service, registered mail or e-mail. All notices and communications shall be sent to the addresses or emails set forth in the business account application.</div>
        </div>
      </Content>
      <Footer />
    </Layout>
    </div>
  )
}
