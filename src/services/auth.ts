interface LoginDTO {
  username: string;
  password: string;
}

class Singleton {
  private static instance: Singleton;
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
  ping = async () => {
    const res = await fetch('/mock/success.json', { mode: 'cors' })
    await new Promise((res, rej) => {
      setInterval(() => res(null), 2000)
    });
    return await res.json()
  }
  login = async ({ username, password }: LoginDTO) => {
    const res = await fetch('/mock/error.json', { mode: 'cors' })
    return await res.json()
  }

}

export default new Singleton()