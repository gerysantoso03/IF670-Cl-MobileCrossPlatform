import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
import "../styles/BmiResult.css";

const BMIResults: React.FC<{ calculateResult: number; bmiType: string }> = (
  props
) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard
          id="result"
          className={
            props.bmiType === "Normal"
              ? "ion-card-success"
              : props.bmiType === "Gemuk" || props.bmiType === "Kurus"
              ? "ion-card-warning"
              : "ion-card-danger"
          }
        >
          <IonCardContent className="ion-text-center">
            <h4>{props.calculateResult}</h4>
            <h4>{props.bmiType}</h4>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResults;
