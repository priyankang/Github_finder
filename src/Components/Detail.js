import react, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: []
        }
        
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.location.userData.login}/repos`).then(res => {
            console.log(res.data, "##############")
            this.setState({
                showData: res.data,

            })

        })
    }

    render() {
        // console.log("ShowData", this.state.showData)
        return (
            <div>
                <Card style={{ width: '260px', marginLeft: '100px', marginTop: '40px', cursor: 'pointer' }}>
                    <img style={{ width: '200px' }} src={this.props.location.userData.avatar_url} />
                    <Button variant="contained" style={{ fontSize: '27', marginTop: '20px', width: '100%' }}> 
                        <a href={this.props.location.userData.html_url} target='_blank'>View Profile</a>
                    </Button>
                </Card>

                <h3>Latest Repos</h3>
                {
                    this.state.showData.map((detail, index) => (
                        <div key={index}>

                            <Card style={{ width: '450px', display: 'inline-block', marginLeft: '50px' }}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        <a href={detail.html_url} target='_blank' >
                                            {detail.name}
                                        </a>
                                        <p>
                                            {detail.full_name}
                                            
                                        </p>
                                        <p>{detail.description}</p>
                                        <p style={{ fontSize: '15px', display: 'inline-block' }}>{detail.language}</p>
                                        <span
                                            style={{
                                                backgroundColor: '#d3d3d3',
                                                marginLeft: '100px',
                                                padding: '3px 10px 3px 10px',
                                            }}>
                                            {detail.forks_count}Fork
									</span>
                                        <span style={{ backgroundColor: '#c0c0c0', padding: '3px 10px 3px 10px' }}>
                                            {detail.watchers_count}watchers
									</span>
                                        <span style={{ backgroundColor: '#d3d3d3 ', padding: '3px 10px 3px 10px' }}>
                                            {detail.stargazers_count}star
									</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                            

                        </div>
                    ))
                }
            </div >


        )
    }
}
export default Detail;