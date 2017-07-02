// Traditional Chinese 繁體中文 - zh-tw.js
'use strict';
var zhtw = function() {}
zhtw.code = 'zhtw';
zhtw.data = {

GEN_Help_21               : 'How do I save/backup my wallet? ',

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
WALL_Add               : '新增錢包 ',
BULK_Generate            : '批量產生 ',
x_Contact                 : '聯繫我們 ',
CONTRACT_Title               : '合約 ',
CONTRACT_Deploy          : '部署合約 ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : '產生錢包 ',
x_Help                    : '幫助 ',
CONTRACT_Interact        : '和合約互動 ',
CONTRACT_Multisig                : '多重簽署 ',
WALL_walletViewCX               : '我的錢包 ',
x_Offline                 : '離線發送 ',
TX_Send_Title             : '發送乙太幣 / 代幣 ',
TX_Send_ShortTokens              : '發送代幣 ',
MSG_Sign                 : '對訊息做簽名 ',
SWAP_Title                    : 'Swap ',
WALL_View              : '查看錢包 ',
WALL_Your             : '你的錢包 ',

/* General */
x_Access                    : '存取合約 ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. 你可以把地址當作是你的"帳號"或者"公鑰"。將地址告訴他人，他人就能發送乙太幣給你。這個圖標能幫助你判別地址。 ',
ADDR_                   : '你的地址 ',
x_Cancel                    : '取消 ',
x_CSV                       : 'CSV 檔 (未加密) ',
x_Download                  : '下載 ',
x_Json                      : 'JSON 檔 (未加密) ',
x_JsonDesc                  : '這是未加密的JSON格式私鑰檔。這表示你不需要密碼就可以控制錢包，但任何持有此JSON文件的人也都無須密碼便能控制你的錢包和乙太幣。 ',
x_Keystore                  : 'Keystore 檔 (UTC / JSON · 推薦 · 經過加密) ',
x_Keystore2                 : 'Keystore 檔 (UTC / JSON) ',
x_KeystoreDesc              : '此Keystore檔和Mist錢包相容，因此你可以輕鬆地匯入錢包。我們推薦你下載並備份此檔案。 ',
x_Mnemonic                  : '助憶口令 ',
x_ParityPhrase              : 'Parity口令 ',
PW_                  : '密碼 ',
x_Print                     : '列印紙錢包 ',
x_PrintDesc                 : '小技巧: 按下列印並保存為PDF檔，儘管你沒有印表機！ ',
x_PrintShort                : '列印 ',
x_PrivKey                   : '私鑰 (未加密) ',
x_PrivKey2                  : '私鑰 ',
x_PrivKeyDesc               : '這是你未加密的私鑰，這表示你不需要密碼就可以控制錢包。如果有人取得此私鑰，他們也無須密碼便能可以控制你的錢包。因此，我們推薦加密過的私鑰檔。 ',
x_Save                      : '保存 ',
x_TXT                       : 'TXT 檔 (未加密) ',
WALL_                    : '錢包 ',

/* Header */
CX_Tagline                  : '開源的JavaScript客戶端乙太錢包Chrome擴充功能 ',
WARN_04                : '確保你存在這裡的所有錢包皆有**額外的備份**。導致此擴充功能資料喪失的可能很多，這包括移除和重新安裝此擴充功能。此擴充功能讓你輕鬆操作錢包，而**不是**備份錢包。 ',
FOOTER_Tagline                 : '開源的JavaScript客戶端乙太錢包 ',
WARN_01               : '每次存取和產生錢包時都要檢查上方的網址。小心釣魚網站！ ',

/* Footer */
FOOTER_1                    : '讓你輕鬆、安全地和乙太坊互動的開源客戶端工具。 ',
FOOTER_1b                   : '開發者 ',
FOOTER_2                    : '歡迎捐贈給我們 ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : '免責聲明 ',

/* Sidebar */
ACCOUNT_Info         : '帳戶資訊 ',
ACCOUNT_Address         : '帳戶地址 ',
ACCOUNT_Balance          : '帳戶餘額 ',
TOKEN_Balance            : '代幣餘額 ',
SIDEBAR_Equiv               : '價值 ',
TX_History        : '交易歷史 ',
SIDEBAR_donation            : 'MyEtherWallet是注重你的隱私和安全的免費、開源服務。如果有更多捐贈，我們就能花更多時間開發新功能、聽取你的建議並且滿足你的需要。我們只是兩個想要改變世界的人。幫助我們？ ',
SIDEBAR_donate              : '捐贈 ',
SIDEBAR_thanks              : '謝謝你!!! ',

/* Decrypt Panel */
DECRYPT_Access              : '你想要如何存取你的錢包？ ',
DECRYPT_Title               : '選擇你的私鑰格式 ',
WALL_Select              : '選擇一個錢包 ',

/* Mnemonic */
MNEM_1                      : '選擇你要互動的地址。 ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : '更多地址 ',
MNEM_prev                   : '之前的地址 ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S 錢包',
DECRYPT_Ledger_1                : '連接至你的 Ledger Nano S ',
DECRYPT_Ledger_2                : '開啟基於以太坊開發的應用程式（或一個寫成合約的應用程式） ',
DECRYPT_Ledger_3                : '確認已經開啟設定選項中的瀏覽器支援選項',
DECRYPT_Ledger_4                : '如果在設定選項中找不到瀏覽器支援選項，請確認你的韌體版本新於[1.2版](https://www.ledgerwallet.com/apps/manager)',
DECRYPT_Ledger_0b               : '以 [Chrome](https://www.google.com/chrome/browser/desktop/) 或 [Opera](https://www.opera.com/) 瀏覽器重新開啟MyEtherWallet',
DECRYPT_Ledger_scan             : '連接至 Ledger Nano S ',
x_Trezor                    : 'TREZOR 錢包 ',
DECRYPT_Trezor_scan             : '連接至 TREZOR ',

/* Add Wallet */
DECRYPT_Label_1                 : '你想要做什麼？ ',
WALL_GenerateNew                 : '產生新錢包 ',
DECRYPT_Radio_2                 : '選擇你的錢包檔 (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : '選擇你的錢包檔 ',
DECRYPT_Radio_2_short           : '選擇錢包檔... ',
DECRYPT_Radio_3                 : '貼上/輸入 你的私鑰 ',
ACCOUNT_AddWatch                 : '監視一個帳戶 ',
MNEM_Enter                 : '貼上/輸入 你的助憶口令 ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : '新增一個暱稱 ',
DECRYPT_Label_3                 : '你的錢包經過加密。請輸入密碼。 ',
DECRYPT_Label_4                 : '監視一個帳戶 ',
WARN_03               : '你可以在錢包頁面監視任何帳戶，而且不需要匯入該帳戶的私鑰。這並不表示你能存取該帳戶或透過該帳戶傳送乙太幣。 ',
DECRYPT_Label_5                 : '輸入地址 ',
WALL_Unlock                 : '解鎖你的錢包 ',
WALL_Unlock_Short           : '解鎖 ',
ACCOUNT_Add                 : '新增帳戶 ',

/* My Wallet */
WALL_Nickname                  : '錢包暱稱 ',
MYWAL_Address               : '錢包地址 ',
ACCOUNT_Balance                   : '餘額 ',
WALL_Edit_Short                  : '編輯 ',
WALL_View_Short                  : '檢視 ',
WALL_Remove                : '移除 ',
WALL_RemoveWal             : '移除錢包 ',
WALL_WatchOnlyAccounts             : '你正在監視的錢包 ',
WALL_Viewing               : '查看錢包 ',
WALL_Hide                  : '隱藏錢包資訊 ',
WALL_Edit                : '編輯錢包 ',
WALL_Name                  : '錢包名字 ',
WARN_06             : '警告！ 你即將移除你的錢包 ',
WARN_07             : '確保你在移除錢包前，已經**保存了私鑰和Keystore檔，並記住了密碼**。 ',
WARN_08             : '如果你在未來還想在MyEtherWallet擴充功能上操作此錢包，你必須使用私鑰或JSON檔和密碼來重新新增它。 ',

/* Generate Wallets */
GEN_desc                    : '你可以在這裡新增多個錢包 ',
PW_Enter                 : '輸入一個夠安全的密碼（至少九個字元） ',
PW_Enter           : '別忘記將密碼記下！ ',
GEN_SuccessMsg              : '成功！ 你的錢包已被產生。 ',
x_Keystore_Save                 : '存下你的Keystore檔。 別忘記上方的密碼。 ',
ADDR_Save                 : '記下你的地址。 ',
GEN_Label_4                 : '印出你的紙錢包，或存下QR碼版本的資料。（可選的） ',

/* Bulk Generate Wallets */
BULK_Label_1                : '要產生的錢包數量 ',
BULK_Label_2                : '產生多個錢包 ',
BULK_SuccessMsg             : '成功！ 你的所有錢包皆已被產生。 ',

/* Sending Ether and Tokens */
ADDR_To                   : '給地址 ',
x_Amount                 : '要發送的數量 ',
x_Amount_short           : '數量 ',
TOKEN_AddCustom                 : '新增其他代幣 ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : '送出所有餘額 ',
TX_Generate               : '產生交易訊息 ',
TX_Unsigned                    : '交易訊息 ',
TX_Signed                 : '已簽署的交易訊息 ',
TX_Send_Short                  : '送出交易 ',
SENDModal_Title             : '注意！ ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '你將要送出 ',
SENDModal_Content_2         : '到 ',
SENDModal_Content_3         : '確定要繼續嗎？ ',
SENDModal_Content_4         : '提醒：如果你遇到了問題，解決方法通常是傳入乙太幣到帳戶中來支付交易所需的gas。Gas由乙太幣支付。 ',
SENDModal_No                : '不，帶我離開這裡！ ',
SENDModal_Yes               : '好，我確定！進行交易。 ',

/* Tokens */
ADDR_Short                  : '地址 ',
TOKEN_Symbol                : '代幣縮寫 ',
TOKEN_Dec                   : '小數點 ',
TOKEN_show                  : '顯示所有代幣 ',
TOKEN_hide                  : '隱藏代幣 ',

/* Send Transaction */
TX_desc                  : '如果你是要傳送代幣(Token)，請使用“傳送代幣”功能',
TX_warning               : '"Only ETH" 或 "Only ETC" 功能是透過一個合約來傳送，並非單純的轉錢。有些服務可能沒辦法接受這兩種功能。 了解更多。Functions you are sending via a contract. Some services have issues accepting these transactions. Read more. ',
SEND_Advanced              : '進階功能：為交易新增Data',
x_Data                  : '交易的Data ',
x_GasLimit                   : 'Gas 總量 ',
TX_Send_ShortInfo              : '我們使用比平均手續費略高的gas價格（每單位0.000000021 ETH）確保交易能快速被確認。我們並不收取任何手續費。',

/* Offline Transaction */
OFFLINE_Title               : '以離線的方式製作交易',
OFFLINE_Desc                : '離線製作交易的方式包含三步驟。步驟一及三需要使用連網裝置，步驟二則使用離線的電腦以確保你的私鑰不會被連網裝置存取。',
OFFLLINE_Step1_Title        : '步驟一： 產生交易相關訊息（在連網裝置上） ',
OFFLINE_Step1_Button        : '產生交易相關訊息 ',
ADDR_From       : '交易發起方的地址 ',
OFFLINE_Step1_Label_2       : '注意： 這是交易發起方的地址，不是交易接受方的地址。Nonce值是看交易發起方來決定。如果是使用離線裝置，則這個地址是離線儲存裝置的帳號地址。 ',
OFFLINE_Step2_Title         : '步驟二： 製作交易（在離線裝置上） ',
ADDR_To       : '交易接收方的地址 ',
OFFLINE_Step2_Label_2       : '送給交易接收方的金額',
x_GasPrice                  : '每單位gas的費用',
x_GasPriceDesc                 : '這會顯示於你步驟一連網裝置上。',
x_GasLimit       : 'Gas 總量 ',
x_GasLimitDesc      : '21000 是預設的gas總量（單純轉錢）。如果你是要執行合約，則會不一樣。多給的gas如果沒有用完會退還給你。',
x_NonceDesc                 : '這會顯示於你步驟一連網裝置上。',
x_Data       : '交易的Data ',
x_DataDesc      : '並非必需的，Data通常只有在你執行合約的時候才需要。 ',
OFFLINE_Step2_Label_7       : '輸入/選擇 你的私鑰/JSON檔。 ',
OFFLINE_Step3_Title         : '步驟三： 送出交易（在連網裝置上） ',
OFFLINE_Step3_Label_1       : '將步驟二經過簽名的交易複製並貼上到這，最後按下送出交易的按鈕。',

/* Contracts */
CONTRACT_Title              : '合約地址 ',
CONTRACT_Title_2            : '選擇已經存在的合約 ',
CONTRACT_Json               : '合約的 ABI / JSON 介面 ',
CONTRACT_Interact_Title     : '讀取/寫入 合約',
CONTRACT_Interact_CTA       : '選擇一個動作',
CONTRACT_Bytecode           : '合約的程式碼 ',
CONTRACT_Read               : '讀取 ',
CONTRACT_Write              : '寫入 ',
CONTRACT_GenBytecode                : '產生程式碼 ',
CONTRACT_GenBytecoded               : '已產生的程式碼 ',
TX_Sign                  : '對交易做簽名 ',
CONTRACT_GenInterface               : '已產生的合約介面 ',

/* Node Switcher */
NODE_Title                  : '設定你的客製節點',
NODE_Subtitle               : '連線至一個區域/私人節點...',
WARN_05                : '你的節點必須使用HTTPS安全連線的方式才能夠由MyEtherWallet.com連接到它。 你可以下載[MyEtherWallet repo](https://github.com/kvhnuke/etherwallet/releases/latest)並建立起一個你的節點來連接至其他的節點。或著從[LetsEncrypt](https://letsencrypt.org/)獲取免費的SSL憑證',
NODE_Name                   : '節點名稱',
NODE_Port                   : '節點連線的端口號碼',
NODE_CTA                    : '儲存設定並使用客製節點',

/* Swap / Exchange */
SWAP_rates                  : "當前的匯率 ",
SWAP_init_1                 : "我想要用我的 ",
SWAP_init_2                 : " 換 ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "下一步 ", // or "Continue"
SWAP_information            : "你的相關資料 ",
x_Amount               : "送出多少金額 ",
SWAP_rec_amt                : "收入多少金額 ",
SWAP_your_rate              : "你的匯率 ",
SWAP_rec_add                : "你收錢的地址 ",
SWAP_start_CTA              : "開始交換 ",
SWAP_ref_num                : "你的交易編號 ",
SWAP_time                   : "剩餘多少時間可送出交易 ",
SWAP_elapsed                : "送出交易後已經經過了 ",
SWAP_progress_1             : "訂單已產生 ",
SWAP_progress_2             : "正在等待你的 ", // Waiting for your BTC...
SWAP_progress_3             : "收到了! ", // ETH Received!
SWAP_progress_4             : "正在傳送你的 {{orderResult.output.currency}} ",
SWAP_progress_5             : "訂單完成 ",
SWAP_order_CTA              : "請傳送 ", // Please send 1 ETH...
SWAP_unlock                 : "解鎖你的錢包來從這個頁面轉錢或轉代幣 ",

/* Sign Message */
MSG_message                 : '訊息 ',
MSG_date                    : '日期 ',
MSG_signature               : '簽名 ',
MSG_verify                  : '驗證訊息 ',
MSG_info1                   : '填入當前時間來避免簽名在其他不同時間被重複利用。 ',
MSG_info2                   : '填入你的暱稱及你使用該暱稱的場合來避免其他人使用',
MSG_info3                   : '填入這個訊息的源由來避免被用在其他目的。 ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : '這可以讓你下載不同版本的私鑰並且重新印製出你的紙錢包。你可能會需要這個功能來將你的帳戶[讀入Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)。 如果你想要檢查你的帳號餘額，我們建議你使用區塊鏈瀏覽網頁像是[etherscan.io](http://etherscan.io/)。 ',
VIEWWALLET_Subtitle_Short   : '這可以讓你下載不同版本的私鑰並且重新印製出你的紙錢包。 ',
VIEWWALLET_SuccessMsg       : '成功！這些是你的錢包內容。 ',

/* Chrome Extension */
ERROR_CX_01                  : '你沒有儲存過任何錢包。 點擊["新增錢包"](/cx-wallet.html#add-wallet)來新增一個錢包！ ',
CX_quicksend                : '傳送 ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : '請輸入有效的數量。 ',
ERROR_1                     : '你的密碼至少需要9個字元。請確保你的密碼強度夠強。 ',
ERROR_2                     : '抱歉，我們無法識別這個錢包檔案。 ',
ERROR_3                     : '這不是一個有效的錢包檔案。 ',
ERROR_4                     : '這個單位並不存在，請使用以下的單位 ',
ERROR_5                     : '無效的地址。 ',
ERROR_6                     : '無效的密碼。 ',
ERROR_7                     : '無效的數量。(Must be integer. Try 0-18.) ', // 7
ERROR_8                     : '無效的gas上限。(Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : '無效的data。(Must be hex.) ', // 9
ERROR_10                    : '無效的gas數量。(Must be integer. Try 20 GWEI / 20000000000 WEI.)',
ERROR_11                    : '無效的nonce值。(Must be integer.)', // 11
ERROR_12                    : '無效的已簽名交易。 ',
ERROR_13                    : '已經有一個使用相同暱稱的錢包存在。 ',
ERROR_14                    : '找不到錢包。 ',
ERROR_15                    : 'It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ',
ERROR_16                    : '儲存裝置中已經有一個包含這個地址的錢包存在。 請見錢包頁面。 ',
ERROR_17                    : '你帳戶中必須有至少 **0.01 ETH** 來支付gas的成本。 請添加一些 ETH 並重試。 ',
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : '無效的符號 ',
ERROR_20                    : '並不是一個有效的 ERC-20 代幣 ',
ERROR_21                    : '無法估計花費的gas。 這個帳戶沒有足夠餘額，或是接收的合約丟出錯誤訊息。 你可以自己手動設定gas並執行。 傳送後的錯誤訊息可能會提供更多訊息。 ',
ERROR_22                    : '請輸入有效的節點名稱',
ERROR_23                    : '輸入有效的url，如果你使用https請確保url也是使用https。 ',
ERROR_24                    : '請輸入有效的連線端口號碼 ',
ERROR_25                    : '請輸入有效的鏈ID',
ERROR_26                    : '請輸入有效的ABI ',
ERROR_27                    : '最少數量 0.01 及最大',
ERROR_28                    : '**以後你會需要密碼和Keystore檔案** (或私鑰)來存取你的錢包。請儲存並備份在額外的地方！如果沒有儲存你是沒有機會找回這個錢包的。 詳見[幫助頁面](https://www.myetherwallet.com/#help)來獲取更多資訊。 ',
ERROR_29                    : '請輸入有效的使用者及密碼 ',
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : '有效的地址 ',
SUCCESS_2                   : '成功解密錢包 ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ', //'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //
SUCCESS_4                   : '成功新增你的錢包 ',
SUCCESS_5                   : '已選擇檔案 ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : '你藉由一條連結到達此頁面，且該連結已幫你將地址、金額、gas和data欄位或交易類別(傳送模式)填好。 送出前你可以自由更改其中的值。 首先先解鎖你的錢包。 ',

/* Geth Error Messages */
GETH_InvalidSender          : '無效的傳送者 ',
GETH_Nonce                  : 'Nonce值太低 ',
GETH_Cheap                  : 'Gas價格太低以致不會被礦工接受 ',
GETH_Balance                : '餘額不足 ',
GETH_NonExistentAccount     : '帳戶不存在或是帳戶餘額不足 ',
GETH_InsufficientFunds      : '提供的金額不足以支付gas成本的錢加上你要轉的錢 ',
GETH_IntrinsicGas           : '提供的gas量不足 ',
GETH_GasLimit               : 'gas量超過每單位區塊的gas上限 ',
GETH_NegativeValue          : '負數的值 ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "已經有輸入一筆有同樣雜湊值的交易了。",
PARITY_Old                  : "交易的nonce值太低。請增加nonce值。",
PARITY_TooCheapToReplace    : "交易手續費太低。已經有另外一筆有同樣nonce值的交易被加入排程。 請增加交易費用來取代該筆交易或增加nonce值來接續在該筆交易之後。",
PARITY_LimitReached         : "目前排程中有太多交易。你的交易因為超過排程容量上限而被拒絕。請增加交易手續費。",
PARITY_InsufficientGasPrice : "交易手續費太低。達不到你節點所要求的最低手續費(最低: {}, 收到: {}). 請增加交易手續費。",
PARITY_InsufficientBalance  : "提供金額不足。你嘗試送出交易的帳戶並沒有足夠的金額。 需要 {} wei 但只有: {} wei.",
PARITY_GasLimitExceeded     : "交易提供的gas量超過每單位的區塊gas上限 上限: {}, 收到: {}. 請減少提供的gas量。",
PARITY_InvalidGasLimit      : "提供的gas量超過上限。",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : '譯者: ',
z_TRANSLATE1            : '[Dymnz](https://www.myetherwallet.com/?gaslimit=21000&to=0x0065F744bCb5393aA538cfb0688CBb0Ae0bFa741&value=0.1#send-transaction) ·',
z_TRANSLATE2            : 'NIC',
z_TRANSLATE3            : ' ',
z_TRANSLATE4            : ' ',
z_TRANSLATE5            : ' '
};

module.exports = zhtw;
