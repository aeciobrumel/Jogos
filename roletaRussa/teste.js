const prompt = require('prompt-read');

const jogadores = [];

const armaimg = `

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⢶⣶⣶⠼⣦⣤⣼⣼⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⣯⠿⠟⠛⠻⢶⣿⣯⣿⣿⣃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣖⣺⡿⠿⠷⠶⠒⢶⣶⠖⠀⠉⡻⢻⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⢻⣭⣫⣿⠁⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣖⡿⠋⢙⣿⠿⢿⠿⣿⡦⠄⠀⠀⠀⣠⣾⠟⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣰⣿⣴⣿⡿⠿⠿⠿⢿⣦⣄⠀⠀⠀⣠⣾⣿⠃⠀⢀⣸⡿⣳⣶⣲⡄⠀⠀⠀⠀⠀⠀
⠀⠀⣾⣽⡿⣛⣵⠾⠿⠿⠷⣦⣌⠻⣷⣄⢰⣿⠟⠁⠀⢠⣾⠿⢡⣯⠸⠧⢽⣄⠀⠀⠀⠀⠀
⠀⢸⡇⡟⣴⡿⢟⣽⣾⣿⣶⣌⠻⣧⣹⣿⡿⠋⠀⠀⠀⣾⠿⡇⣽⣿⣄⠀⠀⠉⠳⣄⢀⡀⠀
⠀⢸⠇⢳⣿⢳⣿⣿⣿⣿⣿⣿⡆⢹⡇⣿⡇⠀⡆⣠⣼⡏⢰⣿⣿⣿⣿⣦⠀⠀⠀⠈⠳⣅⠀
⠀⣸⡀⢸⣿⢸⣿⣿⣿⣿⣿⣿⡇⣸⡇⣿⡇⠀⡟⣻⢳⣷⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠘⣧
⢰⡟⡿⡆⠹⣧⡙⢿⣿⣿⠿⡟⢡⣿⢷⣿⣧⠾⢠⣿⣾⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠘
⠀⠻⡽⣦⠀⠈⠙⠳⢶⣦⡶⠞⢻⡟⡸⠟⠁⢠⠟⠉⠉⠙⠿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⡴
⠀⠀⢸⣿⡇⠀⠀⣀⣠⠀⢀⡀⠸⣹⠇⠀⣰⡟⡀⠀⠈⠛⠻⢿⣻⣿⡿⠀⠀⠀⠀⠀⠀⡠⠁
⠀⠀⢸⣿⣇⣴⢿⣿⣿⣿⣮⣿⣷⡟⠀⣰⣿⢰⠀⣀⠀⠀⠀⢀⣉⣿⡇⠀⠀⠀⠀⠀⣸⠃⠀
⠀⠀⢸⣿⡟⣯⠸⣿⣿⣿⣿⢈⣿⡇⣼⣿⠇⣸⡦⣙⣷⣦⣴⣯⠿⠛⢷⡀⠀⠀⠀⣰⡟⠀⠀
⠀⠀⠘⣿⣿⡸⣷⣝⠻⠟⢋⣾⣟⣰⡏⣠⣤⡟⠀⠀⠈⠉⠁⠀⠀⠀⠀⢻⣶⠀⢀⣿⠁⠀⠀
⠀⠀⠀⢸⡿⣿⣦⣽⣛⣛⣛⣭⣾⣷⡶⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡟⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠁⢸⢻⠁⠀⠀⠀⠀
⠀⠀⠀⠀⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣀⣀⣀⣀⣀⣠⣤⠶⠛⠁⢀⣾⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢿⣻⣿⣿⣿⣿⣿⣿⣎⣿⡅⠀⠈⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⣼⣿⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡷⠟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⠻⢿⣿⣿⣟⣂⣀⣀⣀⣀⣀⣀⣤⠴⠋⠁⣾⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣷⣷⡄⠀⠀⠀⠉⠉⠉⠉⠉⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⣤⣤⣤⣤⣄⣤⣤⡤⠴⠞⠁⠀⠀
`
const armacabeca = `

⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⣀⡤⠂⠀⠀⣀⣀⣤⣀⣀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣐⣯⠥⠴⠚⠛⠋⠁⠀⠀⠉⠙
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⡯⠶⠛⠛⠛⠛⠳⠶⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢋⣤⣶⣶⣶⣴⣦⣀⡀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⠋⣽⣷⣾⢶⣶⣿⣿⣿⣿⣿⡿⣷⣼⣭⢙⣿⣟⣛⣛⣛⣛⣛⡛⣛⣛⣛⣛⣛⣙⣛⣋⣉⣉⣛⣋⣉⣉⣉⣉⣉⣿⡿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⣠
⣿⣿⣿⣿⣿⣿⣿⠏⣀⣿⣟⣷⡆⡀⠉⣩⡍⣽⣿⣷⣶⣾⣿⣿⣷⣿⣿⣿⣿⣾⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢇⣿⡏⠁⠀⣀⣽⣿⣿⣿⣿⣿⣿⣿⣿
⢛⣻⣿⣿⣿⣟⣡⣼⢻⣿⣍⣹⡿⣿⣿⣿⣿⣿⣿⣧⣭⣭⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⡟⠛⠛⢛⣛⡛⡛⣿⣟⡛⢛⠛⠛⢻⣿⣿⣿⢸⣟⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠛⠯⣭⣼⣿⣿⣻⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⣛⣿⡟⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢻⣿⣿⠀⢿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣶⣶⣶⣄⡉⢹⡅⠲⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿⣿⠀⠸⣿⣿⣿⣿⣿⢴⠆⢛⣛⣛⣿⢹⠘
⣿⣿⣿⣿⣿⣿⠃⠀⠺⣿⣟⣉⣭⣛⠉⠉⢩⣀⠈⣿⣽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡌⣿⣿⠀⠀⠉⠙⢿⣿⣿⣿⡿⠟⠛⠋⢉⣸⢀
⣿⣿⣿⢹⣿⣇⡀⠀⣤⣿⣿⣿⢿⣿⣿⠳⣤⣿⠟⠛⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢾⠋⠈
⣿⣿⣿⠈⣿⣿⠻⣾⠿⣿⣿⣿⣬⣿⣿⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣹⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠋⠁⠀
⣿⣿⣿⣷⠿⢿⣷⣿⡀⠀⠹⢿⣿⣿⠏⠀⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠙⢿⣴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣀⣀⣰
⣿⣿⣿⣧⣴⣾⣿⣿⢷⣄⡀⢀⣙⣳⣦⡾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⢬⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⢰⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠏⠀⠉⠙⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣶⡾⣿⣷⡤⠤⠀⠀⠀⠀⠀⠀⢈⣿⣿⣿⣿
⣿⣿⣦⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣭⣀⣼⣿⣷⠆⠄⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿
⡿⠿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⢀⠀⠀⢀⣰⣿⣿⣿⡿⠟⢻⣿
⣿⣦⣌⣻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠀⢮⣸⣿⣿⣽⣿⣿⣷⣶
⣿⣿⣿⣿⡿⢁⣠⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⣀⣀⣀⣀⣀⣀⣀⡀⣀⠀⠀⠀⠀⠀⣿⣿⡋⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿
⣈⣩⣭⣥⣤⣤⣀⣀⣀⣀⣠⣤⣤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣁⣁⣈⣉⣉⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠛⠛⠋⠉⣩⣽⣿⣿⣿⣿⣆⣾⡿⠁⣈⠁⣀⣤⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢠⣴⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀

`
const municiando = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠒⠒⠢⠤⠤⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠑⠒⠒⠒⠒⠾⠉⠉⠛⢦⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⢀⣾⣧⣀⣀⣀⣠⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⡷⡶⣦⣤⣤⣤⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⠾⠋⠀⠀⠀⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣥⣀⢀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣟⣛⣛⣛⣛⣛⣻⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⢿⡟⠙⠛⣿⠟⠁⠀⠀⠀⣀⣼⣿⡿⢿⡿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣁⣼⣦⠖⠀⠀⠀⠀⠀⠀⠀⠀⠈
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣫⠥⠭⠭⠩⠽⠿⠛⠛⠛⢿⣿⣷⡤⣄⣿⣤⣤⣤⣤⣶⣿⣿⣦⣴⣿⣶⣾⠛⠛⠻⣿⣿⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢈⣛⣛⣛⣟⣁⣀⣼⣃⣀⣀⣀⡀⠀⠀⢀⡀⠰⣯⣥⣤⣤⣤⣤⣭⣭⣿⠿⠿⠯⢿⣿⣿⣿⣿⣿⠀⠀⠀⢺⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⠿⠿⢿⣯⣩⣿⠿⠿⣿⠿⠛⠿⣿⣾⣞⣿⣿⣿⣷⡿⣿⣿⠟⠁⠐⢦⡀⠀⠀⠀⠈⠙⠛⠿⢧⣀⠀⠀⠹⣿⣏⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⢿⣿⣿⡏⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⢀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⡇⠀⠀⠀⠀⠨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣷⣴⡀⢠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⡡⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣼⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⠄⠀⠀⠀⠀⢿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡿⠙⢶⢠⣶⣤⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠈⢿⣿⣿⠗⢰⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⡾⠉⢹⡛⣿⣿⣿⡉⠛⢿⣶⣶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠐⠙⣶⠿⢬⣀⣽⡙⠛⢻⣆⣀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠈⢿⣷⡿⠿⠛⣹⣿⣿⣄⣀⣿⣿⣿⢟⡁⠀⠀⠀⠁⠘⣿⣿⣧⠀⠀⠈⠻⣷⡾⠶⠶⠀⠀⠀⠀⠀⠀⠀⠀
⢤⣾⣇⠀⢁⡿⠋⠉⢻⣿⣿⣿⣿⣷⣶⣤⣄⡀⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠈⢩⡉⠁⠈⠙⠛⠻⣿⣿⣗⢼⣧⡀⢀⣼⡅⠀⣿⣿⣿⠀⠀⠀⠀⠀⠙⠳⣦⣤⠄⠀⠀⠀⠀⠀⠀
⣼⠋⠁⢙⡿⠓⢤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣻⣿⣷⣟⠁⠀⢠⣾⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠉⠛⠒⠂⠀⠀⠀⠀
⠟⠒⣤⣾⡀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⡇⠀⢘⣿⣿⣇⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣺⣿⣿⣯⣼⣿⣿⣷⣴⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣀⣠⡞⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⡼⠁⠀⠸⣿⢻⡿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠙⣿⣦⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣰⠃⠀⠀⠀⢻⡌⢷⡹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⠏⠀⠀⠀⠀⠈⣿⠸⠇⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠙⠛⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢠⠏⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣤⣀⣉⠙⠛⠻⢿⣿⣿⣿⣿⡟⢠⠏⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀



`
const carregando = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣧⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⠿⠇⠀⠀⠀⠀⣠⣤⣄⡀⢀⣾⣿⣿⣿⢾⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣷⣦⣤⣙⠳⢦⣈⣹⣻⣿⣿⣿⣿⣷⣿⣶⣶⣦⡄⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣤⠶⠶⠶⠶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣶⠿⠛⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡀
⠀⠀⠀⠀⢀⣠⢄⣹⠶⣂⣠⣶⣮⣻⣦⣄⡤⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⣴⣿⣿⣆⠈⠻⢿⣿⣿⣿⣿⣿⠟⠀
⠀⠀⢾⣿⠟⢁⣽⣿⣿⣿⡿⢛⡛⠛⢿⣿⣿⣷⣦⡀⠀⢸⣿⣿⣄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣟⣴⡄⣼⣿⣿⣿⣿⣆⠀⠀⠙⠻⣿⠟⠁⠀⠀
⠀⠀⠀⢀⣾⣿⣿⠋⢰⡟⢠⡏⠉⢳⡐⣿⠻⣿⣿⣿⣦⡘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣯⣿⣿⣿⣟⣦⣶⣒⣛⣷⣄⠀⠀
⡄⢠⣶⡿⠛⠛⠲⣦⡀⣿⣄⠹⠒⢋⣼⡟⣠⠞⢋⠙⣿⣿⣆⠹⣿⣿⣿⣿⣿⣿⡀⠹⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⡿⣛⣻⣿⣟⣹⡇⠀
⢱⣾⣿⡓⠲⣿⡀⠹⣷⣀⣍⣻⣿⣿⣛⠀⣿⣄⢰⣷⡌⢿⣿⣆⣿⣿⣿⣿⣿⣿⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠻⠿⠟⠀
⢸⣿⣿⣿⣦⣻⣏⣰⣿⣿⣿⢿⣿⣿⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢛⡟⠀⠀⠀⠀⠀⠀⠀
⢸⣿⡉⠙⡟⠛⠛⠋⣼⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣝⠻⣿⠏⣴⣾⠇⠀⠀⠀⠀⠀⠀⠀
⠘⣿⠆⢠⡷⣖⠛⢦⣼⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⢹⣿⣿⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢻⣆⣿⣆⢰⣷⡘⣿⠙⣿⣿⣿⣿⣿⣿⣿⣦⣤⣼⣿⣿⣿⠟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣻⣿⣿⣿⣾⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⢿⣿⣿⣿⣿⣿⡿⢀⣾⣿⡏⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⢀⡈⡉⢴⣿⣿⡁⠀⢸⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠻⣽⣛⡛⠋⢰⣾⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⢠⣿⣿⣿⣿⣷⣿⣿⣿⣤⣿⣿⣿⣆⡿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠛⢿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣛⣻⣿⣿⣿⣿⣿⣿⣿⣿⠟⠙⢿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠈⠛⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠋⢻⣿⡿⠉⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⢠⣾⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⠁⢀⣿⣏⢀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣼⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⡟⢻⠀⣾⠋⠉⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⢀⣀⣼⣿⡟⠁⠀⠀⠀⠀⠀


`
const carregada = `

⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣠⣴⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣼⡿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣾⣿⣿⣧⢹⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣤⣴⣿⣿⡿⢛⣿⣿⣷⣿⣾⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⡿⡟⣿⣿⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠙⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⠿⠃⠉⠀⠀⠀⠉⠙⠒⠒⠲⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠙⠋⠉⠙⣿⣿⣿⣿⠿⠋⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠦⢄⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⠃⠀⠀⡀⣄⣢⡤⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⠲⢤⣄⣀⡀
⠀⠀⠀⠀⠀⠈⠉⢿⡖⢦⣄⢢⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙
⠀⠀⠀⠀⠀⠀⢰⣂⡇⣄⣉⣿⣾⣿⣿⣦⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐
⠀⠀⠀⠀⠀⠀⠈⢻⣧⣯⣽⠟⠛⢿⣟⢿⣧⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣏⣄⠀⢸⣿⣶⣽⣿⣿⡿⣦⡀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣮⣟⠦⠀⣀⣀⣤⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⣅⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣭⣽⠟⠏⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⣼⣷⣶⣿⣿⣿⣿⣾⣿⣿⣿⡇⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣎⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠠⠄⠀⠀⠀⠀⠀⠀⠀⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢶⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⣀⣀⠀⣀⢀⠀⠀⠀⠀⢘
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠉⣿⣿⣿⣿⣿⣿⣿⣿⠿⠶⣤⣽⣧⠀⣽⣏⢸⠲⢶⣤⣀⠀⠀⠀


`
const fail = `

⠀⠀⣴⣦⣷⣤⣿⣿⣶⣶⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣴⣦⣾⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣴⣿⣿⣿⣿⣿⣿⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣟⢰⣯⣁⠙⠛⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⡿⣫⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣛⣿⣿⣿⡟⠀⠀⠉⠀⠈⠉⠿⢛⣿⣿⣿⣯⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠟⠛⢿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⢿⣛⣙⣿⣿⣿⣿⣿⣦⡀⠒⠒⠒⠒⠒⠒⠒⠒⠚⠚⠛⠛⠛⠛⠛⠛⠛⠛⠛⣒⣉⢉⣉⠉⠉⠉⠉⠉⠉⠁⠈⠙⠓⠂⠀⠼⠿⢿
⣿⣿⣿⣿⣿⣿⠀⠉⠉⢉⣉⣉⣹⣿⣿⣿⣿⣿⣿⣿⣧⡉⠛⣿⣿⣟⠛⠿⠿⣿⠿⠟⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⢶⠾⠶⠶⠾⠿⠿⠟⠛⠇⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣶⣦⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡈⠙⣻⣿⢿⣶⣶⣄⠈⠉⠉⠉⠉⣫⣥⣭⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠀⠉⠉⠃⠀⣀⣀⣉⣉⣉⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣁⣀⣈⣉⣲⣿⣷⣶⣾⣿⣿⣿⣷⣄⣄⣈⣉⣩⣭⣭⣭⣍⣁⡀⠒⠒⠂⣤⢀⣀⣀⣀⣀⣀⣀⣀⢀⡀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⠈⠉⠍⠩⠉⠩⠉⠉⠁⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠈⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀⣀⠀⠀⠀⢀⣀⡤⠄⣠⣶⡟⡟⠛⠋⠛⠛
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣰⣿⡟⠀⢰⣿⠁⠀⠀⠀⣀⣤⡄
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⣿⣿⣧⠀⣿⡞⠛⣋⣥⡄⠈⠉⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⠿⣷⣀⣴⣾⣿⡿⠃⠀⣶⡶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣶⣧⡀⢿⠿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⡀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡃
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡃
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣧⣙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿


`

do {
  console.log("Insira uma opção:\n");
  console.log("1 - Jogar\n");
  console.log("9 - Sair\n");

  var op = prompt('opcao: ', 'number');

  switch (op) {
    case 1:
      const numJogadores = prompt("Digite o número de jogadores: ");
      for (let i = 0; i < numJogadores; i++) {
        jogadores.push(prompt(`Insira o nome do jogador ${i + 1}: `));
      }

      const arma = Array.from({ length: 6 }, () => 0); // Array com 6 slots vazios

      function sleep(ms) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < ms);
      }

      function sortearJogador() {
        const indiceSorteado = Math.floor(Math.random() * jogadores.length);
        const jogadorSorteado = jogadores[indiceSorteado];
        console.clear();

        console.log(`É a vez de ${jogadorSorteado}.`);
        sleep(500)
        return jogadores[indiceSorteado];
      }

      function escolherNumeroSlot(jogador) {
      

        const linhas = armaimg.split('\n');
            // Itera sobre cada linha e adiciona um console.log antes
            linhas.forEach((linha) => {
              console.log(linha);
            });
              sleep(500)
        const numeroEscolhido = prompt("Escolha um número de slot (1 a 6): ");
            
                console.clear();
//ANIMAÇÃO
        const linhas3 = municiando.split('\n');
            // Itera sobre cada linha e adiciona um console.log antes
            linhas3.forEach((linha) => {
              console.log(linha);
            });
              sleep(800)
            console.clear()
              const linhas4 = carregando.split('\n');
              // Itera sobre cada linha e adiciona um console.log antes
              linhas4.forEach((linha) => {
                console.log(linha);
              });
                sleep(800)
                console.clear()
              const linhas5 = carregada.split('\n');
              // Itera sobre cada linha e adiciona um console.log antes
              linhas5.forEach((linha) => {
                console.log(linha);
              });
                sleep(800)
                //FIM ANIMAÇÃO
        if (isNaN(numeroEscolhido) || numeroEscolhido < 1 || numeroEscolhido > 6) {
          console.log("Número inválido! Tente novamente.");
          sleep(1000);
          return escolherNumeroSlot(jogador); // Chama recursivamente a função se o número for inválido
        }
        console.clear()
        console.log(jogador+`Você escolheu o slot ${numeroEscolhido}.`);

        if (arma[numeroEscolhido - 1] === 1) {
          console.clear();
//ANIMAÃO EXPLODINDO
              const linhas2 = armacabeca.split('\n');
              // Itera sobre cada linha e adiciona um console.log antes
              linhas2.forEach((linha) => {
                console.log(linha);
              });    
              sleep(1000)
                console.clear()
                const linhas1 = fail.split('\n');
              // Itera sobre cada linha e adiciona um console.log antes
              linhas1.forEach((linha) => {
                console.log(linha);
              });    

          console.log('BOOM! Você encontrou a bala. Você está eliminado!');
          sleep(1000);
          return false; // Retorna false se o jogador morreu
        } else {
         console.clear()
                const linhas2 = armacabeca.split('\n');
              // Itera sobre cada linha e adiciona um console.log antes
              linhas2.forEach((linha) => {
                console.log(linha);
              });    
          console.log('CLICK! Você sobreviveu!');
          sleep(1000);
          return true; // Retorna true se o jogador sobreviveu
        }
      }

      function sortearBala() {
        const indiceSorteado = Math.floor(Math.random() * 6);
        arma[indiceSorteado] = 1; // Coloca a bala no slot sorteado (1 representa a bala)
      }

      function iniciarJogo() {
        while (jogadores.length > 1) {
          const jogadorAtual = sortearJogador();
          const jogadorSobreviveu = escolherNumeroSlot(jogadorAtual);
          if (!jogadorSobreviveu) {
            jogadores.splice(jogadores.indexOf(jogadorAtual), 1); // Remove o jogador eliminado do array
          }
        }

        console.clear();
        console.log(`\n${jogadores[0]} é o vencedor! Parabéns!\n`);
      }

      sortearBala(); // Sorteia a posição da bala nos slots

      iniciarJogo();

      break;

    case 9:
      console.log('Adeus!');
      break;

    default:
      console.log('Opção inválida');
      break;
  }
} while (op != 9);
