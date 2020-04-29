import React from 'react'
import {Button, Icon, Modal} from 'semantic-ui-react'
import './modal.css'

const ModalModalExample = () => (
    <Modal trigger={<Button>Show Modal</Button>}>

        <Modal.Header className={'custom-header'}>
            <div style={{float: 'right'}}><Icon name='close'/></div>
        </Modal.Header>
        <Modal.Content image>
            <div>
                <div className={'row-1'} style={{display: 'flex', flex: 2}}>
                    <div>
                        <img style={{height: '400px'}} alt={'preview'} wrapped size='medium'
                             src={require("../../assets/1.png")}/>
                    </div>

                    <div>
                        <div style={{paddingLeft: '10px'}}>
                            <div style={{display: 'flex'}}>
                                <h1 style={{color: '#342766'}}>Trashy Blonde</h1>
                                <div style={{paddingTop: '11px', paddingLeft: '5px'}}><Icon name='star outline'/></div>
                            </div>

                            <div><label style={{color: 'grey', fontSize: '16px'}}>You know You Shouldn't</label></div>

                            <div className={'line'} style={{
                                paddingLeft: '15px',
                                width: '70px',
                                height: '10px',
                                paddingTop: '10px',
                                borderBottom: '4px solid #342766'
                            }}></div>

                            <div className={'ratio'}
                                 style={{paddingTop: '10px'}}>
                                <label><b style={{color: 'grey'}}>IBU : </b></label><label
                                style={{color: 'grey'}}>41.5</label>
                                <label><b style={{color: 'grey'}}> ABV : </b></label><label
                                style={{color: 'grey'}}>4.1%</label>
                                <label><b style={{color: 'grey'}}> EBC : </b></label><label
                                style={{color: 'grey'}}>15</label>
                            </div>

                            <div style={{paddingTop: '10px'}}>
                                <p style={{color: 'grey'}}>Naomi Ellen Watts (born 28 September 1968) is a British
                                    actress
                                    and film producer.[1] She made her film debut in the Australian drama For Love Alone
                                    (1986) and then appeared in the Australian television series Hey Dad..! (1990),
                                    Brides
                                    of Christ (1991), Home and Away (1991), and the film Flirting (1991). Dangerous
                                    Beauty
                                    (1998), and the television series Sleepwalkers (1997–1998). Watts rose to
                                    international
                                    prominence for playing an aspiring actress in David Lynch's psychological thriller
                                    Mulholland Drive (2001) and a tormented journalist in the horror remake The Ring
                                    (2002).</p>
                            </div>

                            <div style={{paddingTop: '10px'}}>
                                <label style={{color: '#4b4b4c', fontSize: '15px'}}><b>Best served with:</b></label>
                            </div>

                            <div style={{paddingLeft: '10px'}}>
                                <li style={{color: '#4b4b4c'}}> Fresh crab with lemon</li>
                                <li style={{color: '#4b4b4c'}}> Garlic butter dipping sauce</li>
                                <li style={{color: '#4b4b4c'}}> Goats cheese salad</li>
                                <li style={{color: '#4b4b4c'}}> Creamy lemon bar doused in powered sugar</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <label><b style={{fontSize: '15px',color:'#342766'}}>You might also like</b></label>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
                    <div style={{border: '1px solid grey'}}>
                        <img style={{height: '200px', width: '200px'}} alt={'preview'} wrapped size='medium'
                             src={require("../../assets/2.jpg")}/>
                    </div>
                    <div style={{border: '1px solid grey'}}>
                        <img style={{height: '200px', width: '200px'}} alt={'preview'} wrapped size='medium'
                             src={require("../../assets/2.jpg")}/>
                    </div>
                    <div style={{border: '1px solid grey'}}>
                        <img style={{height: '200px', width: '200px'}} alt={'preview'} wrapped size='medium'
                             src={require("../../assets/2.jpg")}/>
                    </div>
                    <div style={{border: '1px solid grey'}}>
                        <img style={{height: '200px', width: '200px'}} alt={'preview'} wrapped size='medium'
                             src={require("../../assets/2.jpg")}/>
                    </div>
                </div>
            </div>
        </Modal.Content>
    </Modal>
)

export default ModalModalExample
