import {getEnvCredentials} from '@netanelh2/playwright-framework'
import dotenv from 'dotenv'

dotenv.config({quiet: true})

export const BASE_URL: string = getEnvCredentials(process.env.BASE_URL)
