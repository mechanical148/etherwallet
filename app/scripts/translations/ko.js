// Korean
'use strict';
var ko = function() {}
ko.code = 'ko';
ko.data = {

/* New Generics */
TX_CancelReplace           : 'Cancel or Replace Transaction',
TX_Cancel                  : 'Cancel Transaction',
PW_Desc              : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
x_ReadMore                  : 'Read More',
TX_Replace                 : 'Replace Transaction',
x_TransHash                 : 'Transaction Hash',
TX_TXFee                     : 'TX Fee',
TX_Hash                    : 'TX Hash',

/* Check TX Status */
WALL_Create             : 'Check TX Status',
WALL_View_Short                  : 'TX Status',
TX_Details                  : 'Transaction Details',
VIEWTX_Desc                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
VIEWTX_NotFound                 : 'Transaction Not Found',
VIEWTX_NotFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
VIEWTX_NotFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
VIEWTX_NotFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
VIEWTX_NotFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
VIEWTX_Found           : 'Pending Transaction Found',
VIEWTX_Found_1         : 'Your transaction was located in the TX Pool of the node you are connected to. ',
VIEWTX_Found_2         : 'It is currently pending (waiting to be mined). ',
VIEWTX_Found_3         : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
VIEWTX_FoundOnChain             : 'Transaction Found',
VIEWTX_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
VIEWTX_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
VIEWTX_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',

/* Gen Wallet Updates */
GEN_Help_1                  : 'Use your',
GEN_Help_2                  : 'to access your account.',
GEN_Help_3                  : 'Your device * is * your wallet.',
GEN_Help_4                  : 'Guides & FAQ',
GEN_Help_5                  : 'How to Create a Wallet',
GEN_Help_6                  : 'Getting Started',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'Not Downloading a File? ',
GEN_Help_9                  : 'Try using Google Chrome ',
GEN_Help_10                 : 'Right click & save file as. Filename: ',
GEN_Help_11                 : 'Don\'t open this file on your computer ',
GEN_Help_12                 : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                 : 'How to Back Up Your Keystore File ',
GEN_Help_14                 : 'What are these Different Formats? ',
GEN_Help_15                 : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                 : 'What are these Different Formats?',
GEN_Help_17                 : 'Why Should I?',
GEN_Help_18                 : 'To have a secondary backup.',
GEN_Help_19                 : 'In case you ever forget your password.',
GEN_Help_20                 : 'Cold Storage',
GEN_ConfButton              : 'I understand. Continue.',
GEN_Label_5                 : 'Save Your Private Key ',
GEN_Unlock                  : 'Unlock your Wallet to See Your Address',
x_GasPriceDesc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
x_GasLimitDesc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
x_NonceDesc                  : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.',
TX_TXFeeDesc                  : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',



/* Navigation*/
WALL_Add               : '지갑 추가 ',
BULK_Generate            : '대량 생성 ',
x_Contact                 : '문의하기 ',
CONTRACT_Title               : '컨트랙트 ',
CONTRACT_Deploy          : '컨트랙트 배포 ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : '지갑 생성 ',
x_Help                    : '도움말 ',
CONTRACT_Interact        : '컨트랙트 조작 ',
CONTRACT_Multisig                : '멀티시그 ',
WALL_walletViewCX               : '내 지갑 ',
x_Offline                 : '오프라인 전송 ',
TX_Send_Title             : '이더리움 & 토큰 전송 ',
TX_Send_ShortTokens              : '토큰 전송 ',
MSG_Sign                 : '메세지 서명 ',
SWAP_Title                    : '교환 ',
WALL_View              : '지갑 정보 보기 ',
WALL_Your             : '내 지갑 ',

/* General */
x_Access                    : '액세스 ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. 이것은 자신의 계좌 번호와 공개 키입니다. ETH를 전송하기 위해 필요한 정보입니다. 아이콘은 자신의 주소를 식별합니다. ',
ADDR_                   : '내 주소 ',
x_Cancel                    : '취소 ',
x_CSV                       : 'CSV 파일 (암호화되지 않음) ',
x_Download                  : '다운로드 ',
x_Json                      : 'JSON 파일 (암호화되지 않음) ',
x_JsonDesc                  : '이것은 암호화되지 않은 JSON 형식의 개인 키입니다. 이 암호화되지 않은 JSON 형식의 개인 키를 사용하면 누구나 암호없이 자신의 지갑과 이더리움에 액세스 할 수 있습니다. ',
x_Keystore                  : 'Keystore 파일 (UTC / JSON · 권장 · 암호화됨) ',
x_Keystore2                 : 'Keystore 파일 (UTC / JSON) ',
x_KeystoreDesc              : '이 Keystore / JSON 파일은 Mist에서 사용하는 형식과 일치하므로 나중에 쉽게 가져올 수 있습니다. 다운로드하고 백업하는 것을 권장합니다. ',
x_Mnemonic                  : 'Mnemonic 문구 ',
x_ParityPhrase              : 'Parity 문구 ',
PW_                  : '비밀번호 ',
x_Print                     : '종이 지갑 인쇄 ',
x_PrintDesc                 : '팁: 프린터를 사용하지 않더라도 인쇄를 클릭하여 PDF 파일로 저장할 수 있습니다! ',
x_PrintShort                : '인쇄 ',
x_PrivKey                   : '개인 키 (암호화되지 않음) ',
x_PrivKey2                  : '개인 키 ',
x_PrivKeyDesc               : '이것은 암호화되지 않은 개인 키이므로 암호가 필요하지 않습니다. 이 암호화되지 않은 개인 키를 사용하면 누구나 암호 없이 지갑을 사용할 수 있습니다. 따라서 암호화된 개인 키 사용을 권장합니다. ',
x_Save                      : '저장 ',
x_TXT                       : 'TXT 파일 (암호화되지 않음) ',
WALL_                    : '지갑 ',

/* Header */
CX_Tagline                  : '오픈 소스 JavaScript 클라이언트 측 이더리움 지갑 Chrome 확장 프로그램 ',
WARN_04                : '반드시 이곳에 보관하는 모든 지갑은 **외부 백업**을 진행해주세요. 이 Chrome 확장 프로그램에서는 확장 프로그램 제거 및 재설치를 포함하여 데이터가 저장되지 않고 손실되는 경우가 자주 발생합니다. 이 확장 프로그램은 쉬운 조작을 제공할 뿐, **백업**을 제공하지 않습니다. ',
FOOTER_Tagline                 : '오픈 소스 JavaScript 클라이언트 측 이더리움 지갑 ',
WARN_01               : '지갑에 액세스하거나 새 지갑을 생성하기 전 반드시 URL을 확인해주세요. 피싱(사기) 사이트에 주의하세요! ',

/* Footer */
FOOTER_1                    : '쉽게 사용할 수 있는 오픈 소스, 클라이언트 측 도구 & 이더리움 네트워크와 안전하게 상호 작용합니다. ',
FOOTER_1b                   : '개발자 ',
FOOTER_2                    : '기부해주셔서 정말 감사합니다. ',
FOOTER_3                    : '클라이언트 측 지갑 생성 ',
FOOTER_4                    : '면책 조항 ',

/* Sidebar */
ACCOUNT_Info         : '계정 정보  ',
ACCOUNT_Address         : '계정 주소 ',
ACCOUNT_Balance          : '계정 잔액 ',
TOKEN_Balance            : '토큰 잔액 ',
SIDEBAR_Equiv               : '동일한 가치 ',
TX_History        : '트랜잭션 내역 ',
SIDEBAR_donation            : 'MyEtherWallet은 개인정보보호와 보안을 위한 무료 오픈 서비스입니다. 기부를 많이 받을수록 우리는 새로운 기능과 다양한 의견을 반영하여 사용자의 희망 사항을 위한 개발 시간을 늘리는 것이 가능해질 수 있습니다. 우리는 단 두명이 세상을 바꾸려 하고 있습니다. 도와주시겠습니까? ',
SIDEBAR_donate              : '기부 ',
SIDEBAR_thanks              : '감사합니다!!! ',

/* Decrypt Panel */
DECRYPT_Access              : '지갑 액세스 방법 선택 ',
DECRYPT_Title               : '비공개 키의 형식을 선택해주세요. ',
WALL_Select              : '지갑 선택 ',

/* Mnemonic */
MNEM_1                      : '액세스하고자 하는 주소를 선택해주세요. ',
MNEM_2                      : '하나의 HD Mnemonic 문구에서 여러 가지 지갑/주소를 액세스할 수 있습니다. 액세스하려는 주소를 선택해주세요. ',
MNEM_more                   : '나머지 주소 ',
MNEM_prev                   : '이전 주소 ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : '사용자의 Ledger Nano S를 연결해주세요 ',
DECRYPT_Ledger_2                : '이더리움 어플리케이션을 실행해주세요 (또는 컨트랙트 어플리케이션)  ',
DECRYPT_Ledger_3                : 'Browser Support가 활성화된 상태인지 확인해주세요 ',
DECRYPT_Ledger_4                : '설정에서 Browser Support를 확인할 수 없으면, Ledger [Firmware 1.2] (https://www.ledgerwallet.com/apps/manager) 버전이 설치되어 있는지 확인해주세요. ',
DECRYPT_Ledger_0a               : 'MyEtherWallet을 보안 연결(SSL)로 다시 연결해주세요. ',
DECRYPT_Ledger_0b               : 'MyEtherWallet을 [Chrome](https://www.google.com/chrome/browser/desktop/) 또는 [Opera](https://www.opera.com/) 브라우저로 다시 열어주세요. ',
DECRYPT_Ledger_scan             : 'Ledger Nano S 에 연결하기 ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'TREZOR 에 연결하기 ',

/* Add Wallet */
DECRYPT_Label_1                 : '어떤 걸 진행하시겠습니까? ',
WALL_GenerateNew                 : '새로운 지갑 생성 ',
DECRYPT_Radio_2                 : '지갑 파일 선택하기 (Keystone / JSON) ',
DECRYPT_Radio_2_alt             : '지갑 파일 선택하기 ',
DECRYPT_Radio_2_short           : '지갑 파일 선택하기... ',
DECRYPT_Radio_3                 : '개인 키를 복사해서 입력해주세요. ',
ACCOUNT_AddWatch                 : '모니터링 계좌 추가 ',
MNEM_Enter                 : 'Mnemonic 붙여넣기/입력 ',
MNEM_Enter_Path            : 'HD derivation 경로 선택 ',
MNEM_Enter_PathCustom      : '커스텀 ',
DECRYPT_Label_2                 : '닉네임 만들기 ',
DECRYPT_Label_3                 : '당신의 지갑은 암호화되었습니다. 비밀번호를 입력해주세요. ',
DECRYPT_Label_4                 : '모니터링 계좌 추가 ',
WARN_03               : '지갑 탭은 개인 키를 업로드하지 않고 임의로 모니터링하는 계좌를 추가할 수 있습니다. 이에 따라 지갑의 액세스나 이더리움 전송이 가능하지 않습니다. ',
DECRYPT_Label_5                 : '주소 입력 ',
WALL_Unlock                 : '지갑 잠금 해제 ',
WALL_Unlock_Short           : '잠금 해제 ',
ACCOUNT_Add                 : '계좌 추가 ',
PW_Optional                 : '비밀번호 (선택): ',

/* My Wallet */
WALL_Nickname                  : '지갑 닉네임 ',
MYWAL_Address               : '지갑 주소 ',
ACCOUNT_Balance                   : '잔액 ',
WALL_Edit_Short                  : '편집 ',
WALL_View_Short                  : '보기 ',
WALL_Remove                : '제거 ',
WALL_RemoveWal             : '지갑 제거 ',
WALL_WatchOnlyAccounts             : '내 모니터링 전용 계좌 ',
WALL_Viewing               : '지갑 표시 ',
WALL_Hide                  : '지갑 정보 숨기기 ',
WALL_Edit                : '지갑 수정 ',
WALL_Name                  : '지갑 이름 ',
WARN_06             : '경고! 지갑을 제거하려고 합니다. ',
WARN_07             : '제거하기 전 ** 개인 키 및 Keystore 파일, 비밀번호 **가 저장되어 있는지 확인해주세요. ',
WARN_08             : '나중에 이 지갑을 MyEtherWallet CX와 같이 사용하려면, 개인 키/JSON과 비밀번호를 이용하여 수동으로 다시 추가해야 합니다. ',

/* Generate Wallets */
GEN_desc                    : '만약 여러 개의 지갑을 생성하고 싶다면, 여기서 처리할 수 있습니다. ',
PW_Enter                 : '안전한 비밀번호를 입력해주세요 (최소 9 글자) ',
PW_Enter           : '비밀번호를 저장하고 기억하는 것을 잊지 마세요! ',
GEN_SuccessMsg              : '성공! 당신의 지갑이 생성되었습니다. ',
x_Keystore_Save                 : '당신의 지갑 파일을 저장해주세요. 비밀번호를 잃어버리면 안됩니다. ',
ADDR_Save                 : '지갑 주소를 저장해주세요 ',
GEN_Label_4                 : '선택: 종이 지갑을 인쇄하거나 QR 코드를 저장해주세요. ',

/* Bulk Generate Wallets */
BULK_Label_1                : '생성할 지갑 개수 ',
BULK_Label_2                : '지갑 생성하기 ',
BULK_SuccessMsg             : '성공! 당신의 지갑들이 생성되었습니다. ',

/* Sending Ether and Tokens */
ADDR_To                   : '받는 주소 ',
x_Amount                 : '보낼 수량 ',
x_Amount_short           : '보낼 수량 ',
TOKEN_AddCustom                 : '커스텀 토큰 추가 ',
x_GasLimit                    : '가스 ',
TX_Send_All          : '잔액 모두 전송하기 ',
TX_Generate               : '트랜잭션 생성 ',
TX_Unsigned                    : '초기 트랜잭션 ',
TX_Signed                 : '서명된 트랜잭션 ',
TX_Send_Short                  : '트랜잭션 전송하기 ',
SENDModal_Title             : '경고! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '전송할 예정입니다. ',
SENDModal_Content_2         : '받는 주소 ',
SENDModal_Content_3         : '정말 전송 하시겠습니까? ',
SENDModal_Content_4         : '참고: 에러가 발생한다면, 대부분 토큰 전송에 필요한 가스(수수료, 이더리움으로 결제)가 부족한 것입니다. 이더리움을 계좌에 추가해 주세요. ',
SENDModal_No                : '아니요, 전송을 취소합니다. ',
SENDModal_Yes               : '네, 맞습니다! 전송합니다. ',

/* Tokens */
ADDR_Short                  : '주소 ',
TOKEN_Symbol                : '토큰 기호 ',
TOKEN_Dec                   : '소수 자릿수 ',
TOKEN_show                  : '모든 토큰 보기 ',
TOKEN_hide                  : '토큰 숨기기 ',

/* Send Transaction */
TX_desc                  : '만약 토큰을 전송하고 싶다면 , "토큰 전송하기" 페이지를 사용해주세요. ',
TX_warning               : '"이더리움만 전송하기" 또는 "이더리움 클래식만 전송하기" 를 사용하여 전송할 때, 몇 가지 서비스는 컨트랙트가 체결되지 않을 수 있습니다. 더보기. ',
SEND_Advanced              : '+고급: 데이터 추가 ',
x_Data                  : '데이터 ',
x_GasLimit                   : '가스 한도 ',
TX_Send_ShortInfo              : '21000 가스를 사용하는 표준 트랜잭션은 0.000441 ETH 를 사용합니다. 우리는 최소 가스 가격인 0.000000021 보다 약간 높게 책정하여 전송을 빠르게 합니다. MyEtherWallet은 트랜잭션 수수료를 얻지 않습니다. ',

/* Offline Transaction */
OFFLINE_Title               : '오프라인 트랜잭션 생성 & 전송하기 ',
OFFLINE_Desc                : '오프라인 트랜잭션은 3단계로 이루어 집니다. 1, 3 단계는 온라인 컴퓨터로 진행되고, 2 단계는 오프라인/인터넷이 연결되지 않은 컴퓨터로 진행됩니다. 이러한 단계는 개인 키가 인터넷에 연결된 장치에 도달하지 못하도록 합니다. ',
OFFLLINE_Step1_Title        : '1 단계 : 정보 생성하기 (온라인 컴퓨터) ',
OFFLINE_Step1_Button        : '정보 생성 ',
ADDR_From       : '보내는 주소 ',
OFFLINE_Step1_Label_2       : '참고: 이것은 받는 주소가 아닌 보내는 주소입니다. Nonce는 원래 계좌에서 생성됩니다. 인터넷에 연결되지 않은 컴퓨터를 사용하는 경우 이 주소는 콜드 스토리지 계좌의 주소가 됩니다. ',
OFFLINE_Step2_Title         : '2 단계 : 트랜잭션 생성하기 (오프라인 컴퓨터) ',
ADDR_To       : '받는 주소 ',
OFFLINE_Step2_Label_2       : '보낼 금액/총량 ',
x_GasPrice                  : '가스 가격 ',
x_GasPriceDesc                 : '이것은 1단계에서 온라인 컴퓨터에 표시됩니다. ',
x_GasLimit       : '가스 한도 ',
x_GasLimitDesc      : '21000 가스는 기본 설정값입니다. 컨트랙트를 전송하거나 데이터를 더할 때, 사용 가스는 다를 수 있습니다. 사용되지 않은 가스는 환급됩니다. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : '이것은 1단계에서 온라인 컴퓨터에 표시됩니다. ',
x_Data       : '데이터 ',
x_DataDesc      : '이것은 선택사항입니다. 데이터는 컨트랙트에 대해 트랜잭션을 전송할 때 자주 사용됩니다. ',
OFFLINE_Step2_Label_7       : '개인 키 / JSON 입력 또는 선택 ',
OFFLINE_Step3_Title         : '3 단계 : 전송 또는 트랜잭션 발행 (온라인 컴퓨터) ',
OFFLINE_Step3_Label_1       : '2단계에서 서명된 트랜잭션를 붙여넣고, "트랜잭션 전송하기" 버튼을 누르세요 ',

/* Contracts */
CONTRACT_Title              : '컨트랙트 주소 ',
CONTRACT_Title_2            : '기존 컨트랙트 선택하기 ',
CONTRACT_Json               : 'ABI / JSON 인터페이스 ',
CONTRACT_Interact_Title     : '컨트랙트 읽기/쓰기 ',
CONTRACT_Interact_CTA       : '함수 선택 ',
CONTRACT_Bytecode           : 'Byte 코드 ',
CONTRACT_Read               : '읽기 ',
CONTRACT_Write              : '쓰기 ',
CONTRACT_GenBytecode                : 'Byte 코드 생성하기 ',
CONTRACT_GenBytecoded               : '생성된 Byte 코드 ',
TX_Sign                  : '서명 트랜잭션 ',
CONTRACT_GenInterface               : '생성된 인터페이스 ',

/* Node Switcher */
NODE_Title                  : '커스텀 노드 설정하기 ',
NODE_Subtitle               : '로컬 노드에 연결하려면... ',
WARN_05                : 'MyEtherWallet.com을 통해 연결하기 위해서는 HTTPS 노드가 필요합니다. 모든 노드에 연결하려면 [MyEtherWallet 저장소를 다운로드하고 로컬로 실행] (https://github.com/kvhnuke/etherwallet/releases/latest) 할 수 있습니다. 추가로 무료 SSL 인증서를 [LetsEncrypt](https://letsencrypt.org/)에서 받으실 수 있습니다. ',
NODE_Name                   : '노드 명 ',
NODE_Port                   : '노드 포트 ',
NODE_CTA                    : '커스텀 노드 저장 또는 사용 ',

/* Swap / Exchange */
SWAP_rates                  : "현재 시세 ",
SWAP_init_1                 : "환전하실 ",
SWAP_init_2                 : "에서 ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "진행합니다! ", // or "Continue"
SWAP_information            : "당신의 정보 ",
x_Amount               : "전송량 ",
SWAP_rec_amt                : "수신량 ",
SWAP_your_rate              : "당신의 비율 ",
SWAP_rec_add                : "당신의 받는 주소 ",
SWAP_start_CTA              : "교환 시작 ",
SWAP_ref_num                : "참조 번호 ",
SWAP_time                   : "남은 전송 시간 ",
SWAP_elapsed                : "전송 시간 경과 ",
SWAP_progress_1             : "주문 개시 ",
SWAP_progress_2             : "기다리는 중… : ", // Waiting for your BTC...
SWAP_progress_3             : "수신 완료! ", // ETH Received!
SWAP_progress_4             : "{{order Result.output,currency}} 전송하는 중 ",
SWAP_progress_5             : "주문 완료 ",
SWAP_order_CTA              : "전송해주세요 : ", // Please send 1 ETH...
SWAP_unlock                 : "ETH 또는 토큰을 이 페이지에서 바로 전송하기 위해 당신의 지갑 비밀번호를 해제해주세요. ",

/* Sign Message */
MSG_message                 : '메세지 ',
MSG_date                    : '날짜 ',
MSG_signature               : '서명 ',
MSG_verify                  : '메세지 확인 ',
MSG_info1                   : '서명을 다른 날짜에 재사용하지 못하도록 현재의 날짜를 포함해주세요. ',
MSG_info2                   : '타인이 사용하지 못하도록 당신의 닉네임을 포함해주세요 ',
MSG_info3                   : '다른 용도로 사용되는 것을 막으려면 세부적인 내용을 메시지에 포함해주세요. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : '다른 버전의 개인 키를 다운로드하거나 종이 지갑 정보를 다시 인쇄할 수 있습니다. [계좌를 Geth/Mist로 가져오기](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)를 진행할 때 필요합니다. 잔액을 확인하려면 [etherscan.io](http://etherscan.io/)과 같은 블록체인 조회 서비스를 사용하는 것을 권장합니다. ',
VIEWWALLET_Subtitle_Short   : '다른 버전의 개인 키를 다운로드하거나 종이 지갑 정보를 다시 인쇄 할 수 있습니다. ',
VIEWWALLET_SuccessMsg       : '성공했습니다! 지갑의 세부사항은 다음과 같습니다. ',
VIEWWALLET_ShowPrivKey      : '(보기) ',
VIEWWALLET_HidePrivKey      : '(숨기기) ',

/* Chrome Extension */
ERROR_CX_01                  : '저장된 지갑이 없습니다. 지갑을 추가하려면 ["지갑 추가"](/cx-wallet.html#add-wallet) 버튼을 클릭해주세요! ',
CX_quicksend                : '빠른 전송 ', // 적절한 번역이 없다면, "보내기"를 사용하세요. ',

/* Error Messages */
ERROR_0                     : '올바른 금액을 입력해주세요. ',
ERROR_1                     : '비밀번호는 최소 9자 이상이어야 합니다. 더 강력한 비밀번호를 입력해주세요. ',
ERROR_2                     : '죄송합니다. 이러한 유형의 지갑 파일은 인식 할 수 없습니다. ',
ERROR_3                     : '올바른 지갑 파일이 아닙니다. ',
ERROR_4                     : '존재하지 않는 단위입니다. 다음과 같은 단위 중 하나를 사용해주세요. ',
ERROR_5                     : '잘못된 주소입니다. ',
ERROR_6                     : '잘못된 비밀번호입니다. ',
ERROR_7                     : '잘못된 수량입니다. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : '잘못된 가스 한도입니다. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : '잘못된 데이터입니다. (Must be hex.) ', // 9
ERROR_10                    : '잘못된 가스 수량입니다. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : '잘못된 nonce 입니다. (Must be integer.) ', // 11
ERROR_12                    : '잘못된 서명 트랜잭션입니다. ',
ERROR_13                    : '이미 같은 닉네임의 지갑이 존재합니다. ',
ERROR_14                    : '지갑을 찾을 수 없습니다. ',
ERROR_15                    : '이와 같은 ID 요청을 찾을 수 없거나 요청을 읽는 데 실패하였습니다. ',
ERROR_16                    : '같은 주소의 지갑이 이미 존재합니다. 지갑 페이지를 확인해주세요. ',
ERROR_17                    : '자금이 부족합니다. 트랜잭션을 전송하려는 계좌에 충분한 자금이 없습니다. 가스 비용을 지불하기 위해서는 적어도 **0.01ETH**가 필요합니다. ETH을 추가한 뒤 다시 실행해주세요. ',
ERROR_18                    : '모든 가스가 이 트랜잭션을 위해 사용됩니다. 이것은 이미 투표를 진행했거나 토론 기간이 종료되었기 때문입니다. ',
ERROR_19                    : '비정상 기호 ',
ERROR_20                    : '올바른 ERC-20 토큰이 아닙니다 ',
ERROR_21                    : '필요한 가스양을 추정할 수 없습니다. 충분한 자금이 계좌에 없거나 수신 측 컨트랙트에 오류가 있을 수 있습니다. 가스양을 변경한 후 사용해보세요. 전송시 에러 메세지가 반환됩니다. ',
ERROR_22                    : '올바른 노드 이름을 입력해주세요 ',
ERROR_23                    : '올바른 URL을 입력해주세요. HTTPS를 통해서 연결한다면, 노드도 HTTPS에 연결해야합니다. ',
ERROR_24                    : '올바른 포트를 입력해주세요. ',
ERROR_25                    : '올바른 체인 ID를 입력해주세요 ',
ERROR_26                    : '올바른 ABI를 입력해주세요 ',
ERROR_27                    : '최소량: 0.01. 최대량: ',
ERROR_28                    : '지갑에 액세스하기 위해서는 **Keystore 파일과 비밀번호** (또는 개인키)가 필요합니다. 별도로 저장하여 백업해주세요. 만약 그것을 저장하지 않으면 지갑을 복원할 방법이 없습니다. 자세한 내용은 [도움말 페이지](https://www.myetherwallet.com/#help)를 참고해주세요. ',
ERROR_29                    : '올바른 사용자와 패스워드를 입력해주세요 ',
ERROR_30                    : '올바른 ENS 이름을 입력해주세요 ',
ERROR_31                    : '잘못된 비밀 문구입니다. ',
ERROR_32                    : '노드에 연결할 수 없습니다. 새로고침 하거나 도움말을 확인해주세요. ',
ERROR_33                    : '입찰자의 주소와 잠금 해제된 지갑이 일치하지 않습니다. ',
ERROR_34                    : '해당 이름이 문자열의 이름과 일치하지 않습니다. ',
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : '유효한 주소 ',
SUCCESS_2                   : '지갑이 성공적으로 복호화 되었습니다. ',
SUCCESS_3                   : '트랜잭션이 블록체인으로 공개됩니다. 트랜잭션 내역과 가스가 채굴되었는지 확인려면 클릭해주세요. 가스 또는 컨트랙트 실행 오류가 없는지 확인해주세요. TX Hash : ', //'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //
SUCCESS_4                   : '지갑이 성공적으로 추가되었습니다. ',
SUCCESS_5                   : '파일이 선택되었습니다. ',
SUCCESS_6                   : '성공적으로 연결되었습니다. ',
SUCCESS_7                   : '메세지 서명이 확인되었습니다. ',
WARN_02              : '주소, 값, 가스, 데이터 필드 또는 트랜잭션 유형 (전송 모드)이 링크를 통해 도착했습니다. 전송하기 전에 정보를 변경할 수 있습니다. 시작하려면 지갑을 열어주세요. ',

/* Geth Error Messages */
GETH_InvalidSender          : '잘못된 전송지입니다. ',
GETH_Nonce                  : 'Nonce가 너무 낮습니다. ',
GETH_Cheap                  : '가스 가격이 너무 낮습니다. ',
GETH_Balance                : '잔액이 부족합니다. ',
GETH_NonExistentAccount     : '계좌가 존재 하지 않거나 잔액이 부족합니다. ',
GETH_InsufficientFunds      : '가스 * 가격 + 수량에 대한 자금이 부족합니다.',
GETH_IntrinsicGas           : '기본 가스가 부족합니다. ',
GETH_GasLimit               : '블록 가스 한도를 초과하였습니다. ',
GETH_NegativeValue          : '마이너스 값 ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "이미 동일한 해시를 사용한 트랜잭션을 가져 왔습니다. ",
PARITY_Old                  : "트랜잭션 Nonce가 너무 낮습니다. Nonce를 증가시키십시오. ",
PARITY_TooCheapToReplace    : "트랜잭션 수수료가 너무 낮습니다. 동일한 nonce를 가진 다른 트랜잭션이 대기열에 있습니다. 수수료를 늘리거나 nonce를 늘려보세요. ",
PARITY_LimitReached         : "대기열에 트랜잭션이 너무 많습니다. 트랜잭션이 한도를 초과하여 해당 트랜잭션이 제외되었습니다. 수수료를 늘려보세요. " ,
PARITY_InsufficientGasPrice : "트랜잭션 수수료가 너무 낮습니다. 노드의 최소 수수료 (최소 : {}, 획득 : {})를 충족시키지 못합니다. 수수료를 늘려보세요. ",
PARITY_InsufficientBalance  : "자금이 부족합니다. 트랜잭션을 전송하려는 계좌에 충분한 자금이 없습니다. 필요량: {}, 현재 : {} wei. ",
PARITY_GasLimitExceeded     : "트랜잭션 비용이 현재 가스 한도를 초과합니다. 제한 : {}, 획득 : {}. 가스 공급량을 줄이고 다시 시도해보세요. ",
PARITY_InvalidGasLimit      : "공급 된 가스가 한도를 초과했습니다. ",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : '번역에 기여해주신 분들 ',
z_TRANSLATE1            : '[CoinKorea](https://www.myetherwallet.com/?gaslimit=21000&to=0x0080782b9A9A14f7871Bb765eF7041e784D03F00&value=0.1#send-transaction) · [kanghamin](https://www.myetherwallet.com/?gaslimit=21000&to=0x7B12655A5aada0b3c053C7ff5aa444Bd666A0163&value=0.1#send-transaction) · [maa](https://www.myetherwallet.com/?gaslimit=21000&to=0x14036e41ddb2bd408eaf91597e6dc5220f776ae0&value=0.1#send-transaction) ',
z_TRANSLATE2            : '· [Issac](https://www.myetherwallet.com/?gaslimit=21000&to=0x594a7773f4e062ccf644e8f122d5612b5f0db3b2&value=0.1#send-transaction) ',
z_TRANSLATE3            : '· [coinmaker](https://www.myetherwallet.com/?gaslimit=21000&to=0x80B65285607BAbC4b60a7179A0fa8EB42232b9ad&value=0.1#send-transaction) ',
z_TRANSLATE4            : '· [csjune](https://www.myetherwallet.com/?gaslimit=21000&to=0xfc465E0545c1024d04ceA2d6D154F20E7C67C66f&value=0.1#send-transaction) ',
z_TRANSLATE5            : '· [sadfrog](https://www.myetherwallet.com/?gaslimit=21000&to=0x608c96865c3d1364ffc5137e5ac78b57e58714d4&value=0.1#send-transaction) '

};

module.exports = ko;
