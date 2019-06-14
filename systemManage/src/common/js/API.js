//基础路径
// const baseUrl = "/api"
const baseUrl = ""

//登录
const login = baseUrl + '/login'


//-----------  管理员   ----------//

//管理员列表
const adminManager = baseUrl + '/findManage'

//添加管理员
const addManager = baseUrl + "/addManage"

//查看管理员
const findManager = baseUrl + '/findManage'

//删除管理员
const delManager = baseUrl + "/delManage"

//更新管理员
const updateManager = baseUrl + '/updateManage'


//-----------  用户   ----------//


//用户列表
const userManager = baseUrl + '/findUser'

//添加用户
const addUser = baseUrl + '/addUser'

//删除用户
const delUser = baseUrl + '/delUser'

//查找用户
const findUser = baseUrl + '/findUser'

//更新用户
const updateUser = baseUrl + '/updateUser'




//-----------  通知   ----------//

//通知
const message = baseUrl + '/findNews'

//添加通知
const addMessage = baseUrl + '/addNews'

//删除通知
const delMessage = baseUrl + "/delNews"

//查看通知
const findMessage = baseUrl + "/findNews"

//更新通知
const updateMessage = baseUrl + '/updateNews'



//-----------  设备   ----------//

//设备列表
const deviceList = baseUrl + '/findDevice'

//添加设备
const addDevice = baseUrl + '/addDevice'

//删除设备
const delDevice = baseUrl + "/delDevice"

//查看设备
const findDevice = baseUrl + '/findDevice'

//更新设备
const updateDevice = baseUrl + '/updateDevice'

//退出登录
const exit = baseUrl + '/exit'

export default {
    login,
    adminManager,
    addManager,
    findManager,
    userManager,
    addUser,
    message,
    addMessage,
    deviceList,
    addDevice,
    delManager,
    delUser,
    delDevice,
    delMessage,
    updateManager,
    findUser,
    updateUser,
    findMessage,
    updateMessage,
    findDevice,
    updateDevice,
    exit
}