
interface IProps {
    domain: string
}

interface IConfig {
    development: IProps
    production: IProps
}

const config = {
    development: {
        domain: 'http://localhost:3001',
    } as IProps,
    production: {
        domain: 'https://www.edangelis.com',
    } as IProps,
}

type ObjectIndex = keyof typeof config

const environment: ObjectIndex = process.env.NEXT_PUBLIC_ENVIRONMENT as ObjectIndex || 'development'

const env: IProps = config[environment] as IProps

export {env}