const express = require('express')

const { Pool } = require('pg')

const pool = new Pool({
	host: 'satao.db.elephantsql.com',
	user: 'zxfjcmvf',
	password: 'Sm51J18C_aNg93MFeUerZ-3G8n-NZCm7',
	port: '5432',
	database: 'zxfjcmvf',
})

;(async () => {

	const client = await pool.connect()

	console.log(client)

})()

const app = express()

app.get('/', (_, res) => res.send("Public API Example"))

const products = [
	{ id: 1, name: "MacBook Pro", price: 2800.00, },
	{ id: 2, name: "iPhone 13", price: 1400.00, },
	{ id: 3, name: "Samsung S21", price: 1000.00, },
	{ id: 4, name: "Samsung A41", price: 190.00, },
	{ id: 5, name: "Nokia 1202", price: 10.00, },
]

app.get('/products', (_, res) => res.send(products))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(PORT))
