import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from '../../components'
import { IMGBgFlashSale3, Coin } from '../../assets'

class TukarPoint extends Component {
	constructor(props) {
		super(props)
		this.history = this.props.history
		this.state = {
			historyPoint: [
				{
					type: 'mitra',
					label: 'Transaksi Mitra',
					desc: 'Pembelian XL 50rb',
					latestPoint: '80',
					usedPoint: '40',
					date: '07-03-2020'
				},
				{
					type: 'tukar',
					label: 'Tukar Poin',
					desc: 'Penarikan Poin ke Saldo',
					latestPoint: '80',
					usedPoint: '40',
					date: '07-03-2020'
				},
				{
					type: 'downline',
					label: 'Downline Bambang',
					desc: 'Pembelian XL 50rb',
					latestPoint: '320',
					usedPoint: '100',
					date: '07-03-2020'
				},
				{
					type: 'downline',
					label: 'Downline Siti',
					desc: 'Pembelian XL 50rb',
					latestPoint: '220',
					usedPoint: '100',
					date: '07-03-2020'
				},
			],
			filtered: []
		}
	}

	componentDidMount() {
		this.setState({
			filtered: this.state.historyPoint
		})
	}

	handlePillsChange = e => {
		const { id } = e.target
		const { historyPoint, filtered } = this.state
		// console.log('history point', historyPoint)


		const filterResult = historyPoint.filter(hpoint => hpoint.type === id)
		this.setState({ filtered: filterResult })
		console.log('filtered', filtered)
	}

	render() {
		const { filtered } = this.state

		return (
			<PageLayout>
				<NavBar nameNav="Tukarkan Poin" />
				<ImageBackground src={IMGBgFlashSale3} />
				<TopSection>
					<h3>Poin Kamu</h3>
					<PointValue>
						<img src={Coin} /><h2>5000</h2>
					</PointValue>
					<input type="number" placeholder="Minimal 5000 poin" />
					<button>Tukarkan Sekarang</button>
				</TopSection>
				<BottomSection>
					<h3>Riwayat</h3>
					<PillsWrapper>
						<PillsItem>
							<input type="radio" id="mitra" name="history" onChange={this.handlePillsChange} />
							<label for="mitra">Transaksi Mitra</label>
						</PillsItem>
						<PillsItem>
							<input type="radio" id="tukar" name="history" onChange={this.handlePillsChange} />
							<label for="tukar">Tukar Poin</label>
						</PillsItem>
						<PillsItem>
							<input type="radio" id="downline" name="history" onChange={this.handlePillsChange} />
							<label for="downline">Downline</label>
						</PillsItem>
					</PillsWrapper>
					<CardWrapper>
						{
							filtered?.map((hpoint, index) => (
								<PointCard key={index}>
									<div>
										<h4>{hpoint.label}</h4>
										<h3>{hpoint.desc}</h3>
										<PointWrapper>
											<img className="point-left" src={Coin} />
											<p>{hpoint.usedPoint}</p>
										</PointWrapper>
										<span>{hpoint.date}</span>
									</div>
									<div>
										<h4>Poin Akhir</h4>
										<PointWrapper>
											<img className="point-right" src={Coin} />
											<h3>{hpoint.latestPoint}</h3>
										</PointWrapper>
									</div>
								</PointCard>
							))
						}
					</CardWrapper>
				</BottomSection>
			</PageLayout>
		)
	}
}

export default withRouter(TukarPoint)

const PageLayout = styled.div`
	max-width: 480px;
	margin: 0 auto;
	position: relative;
	box-sizing: border-box;
	height: 100vh;
`

const ImageBackground = styled.img`
	position: absolute;
	width: 100%;
	height: 350px;
	z-index: -1;
	object-fit: cover;
`

const TopSection = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	padding: 20px;
	color: #fff;

	& {
		h3 {
			font-weight: 600;
			font-family: 'Montserrat-sm';
		}

		img {
			width: 50px;
    		margin-right: 3px;
		}

		h2 {
			font-family: 'Montserrat-sm';
			font-size: 40px;
		}

		input {
			width: 100%;
		    height: 50px;
		    padding: 10px 20px;
		    border-radius: 12px;
		    border: none;
		    outline: none;
		    margin: 15px 0 20px 0;
		    font-family: 'Montserrat-sm';
		}

		button {
			background: #FF9900;
		    border: 1px solid #FF9900;
		    color: #fff;
		    font-size: 18px;
		    font-weight: 600;
		    font-family: 'Montserrat-sm';
		    width: 100%;
		    height: 50px;
		    border-radius: 50px;
		    outline: none;
		    cursor: pointer;
		}
	}
`

const PointValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
`

const BottomSection = styled.div`
	background: #ECF5FF;
	height: 100vh;
	padding: 20px;
	margin-top: 10px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;

	& {
		h3 {
			font-family: 'Montserrat-sm';
			margin: 15px 0 30px;
			font-size: 22px;
		}
	}
`

const PillsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row wrap;

`

const PillsItem = styled.div`
	& {
		input[type=radio] {
			display: none;
		}

		label {
			border-radius: 50px;
			border: 2px solid #2B99FF;
			color: #2B99FF;
			font-family: 'Montserrat-sm';
			padding: 10px;
    		letter-spacing: 1.5px;
    		cursor: pointer;
		}

		input[type=radio]:checked ~ label {
			background: #FF9900;
			color: #fff;
			border: 2px solid #FF9900;
		}
	}
`

const CardWrapper = styled.div`
	padding: 15px 0;
`

const PointCard = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	padding: 15px 25px;
	background: #fff;
	border-radius: 20px;
	margin: 20px 0;
	line-height: 1.5;

	& {
		h3 {
			margin: 0;
			font-size: 20px;
		}

		h4 {
			letter-spacing: 1.5px;
		}
	}
`

const PointWrapper = styled.div`
	display: flex;
	align-items: center;

	& {
		h3 {
			font-size: 22px;
			margin: 10px 0;
		}

		p {
			font-family: 'Montserrat-sm'
		}

		.point-left {
			width: 30px;
		}

		.point-right {
		    width: 35px;
    		margin: 10px 0;
		}
	}
`