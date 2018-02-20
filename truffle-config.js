module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // 与你本地的 ganache 设置保持一致
      network_id: "*" // Match any network id
    }
  }
};