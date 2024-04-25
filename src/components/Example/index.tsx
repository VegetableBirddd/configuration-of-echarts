import { optionData } from './optionData'
import './index.css'

const Example:React.FC<{
    onChange:(newValue: any) => void;//传入更新函数
}> = ({onChange})=>{
    return <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',
        gap:'10px',
        padding:'8px',
        backgroundColor:'aliceblue',
    }}>
        {optionData.map(item=>{
            return <div id='show-example' key={item.key} className='w-full;' style={{
                border:'1px solid rgba(0,0,0,.08)',
                borderRadius:'12px',
                padding:'5px 8px',
                boxSizing:'border-box',
                transitionDuration:'0.2s',
            }}
                onClick={()=>{
                    onChange(item.option)
                }}
            >
                <div>
                    <img src={item.imgSrc} width={'100%'} height={'auto'}/>
                </div>
                <div className=' mt-1;' style={{
                    fontSize:'16px'
                }}>
                    {item.key}
                </div>
                
            </div>
        })}
    </div>
}
export default Example;