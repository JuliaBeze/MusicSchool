import React from 'react';
import s from './Information.module.css';




class InformAll extends React.Component {


    render() {

        return (
            <div className={s.inform} id={'project'}>
                <div className={s.informImg} style={this.props.style} >
                    <div><a className={s.show}>{this.props.title}</a></div>
                </div>
            </div>
        )
    }
}

export default InformAll;