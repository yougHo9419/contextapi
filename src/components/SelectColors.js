import React from 'react'; 
import { ColorConsumer } from '../context/color';

const color = ['red','orange','yellow']

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택</h2>
            <ColorConsumer>
                {   ({actions}) => (
                    <div style={{ display:'flex'}}>
                        {color.map(color => (
                            <div
                                key={color}
                                style={{
                                    background : color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                
                                onClick={ () => actions.setColor(color) }
                                onContextMenu = {e => {
                                    e.preventDefault();
                                    actions.setSubColor(color);
                                }}

                            />

                        ))}

                    </div>
                )
                }            
            
            </ColorConsumer>
        </div>

    )
}

export default SelectColors;