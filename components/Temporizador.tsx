import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Temporizador.module.css';

interface TemporizadorProps {
  duracao: number;
  tempoEsgostado: () => void;
  key: any;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao} 
        size={120}
        isPlaying
        onComplete={props.tempoEsgostado}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33]
        ]}>
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}