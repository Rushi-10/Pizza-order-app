import { Link } from "react-router-dom"

export default function Button({children,disabled,to,type,onClick}){
    const base="bg-yellow-500 text-sm uppercase inline-block  font-semibold  tracking-wide text-stone-800   rounded-full hover:bg-yellow-300  transition-colors duration-300 disabled:cursor-not-allowed";
    const styles={
        primary:base+ ' px-4 py-3 md:px-6 md:py-4',
        small: base+ ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary:'border-2 text-sm border-stone-300 uppercase inline-block  font-semibold tracking-wide text-stone-800  rounded-full hover:bg-stone-300 hover:text-stone-800  transition-colors duration-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    };
    
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>;
    if(onClick) return <button onClick={onClick}
    disabled={disabled}
    className={styles[type]}>
    {children}
    </button>;
    return <button 
          disabled={disabled}
          className={styles[type]}>
          {children}
          </button>;
}