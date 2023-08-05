import express from 'express'
import debugingTool from 'debug'
import { Router } from 'express'

export const api = express()
export const debug = debugingTool('blog-api:server')

export { express, Router }