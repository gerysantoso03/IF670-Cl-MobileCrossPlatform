import { IonButton, IonCol, IonRow, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BMIControls: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  (props) => {
    return (
      <IonRow>
        <IonCol className="ion-text-center" size="12" size-md="6">
          <IonButton
            onClick={props.onCalculate}
            className="text-center"
            expand="block"
            color="success"
          >
            <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-center" size="12" size-md="6">
          <IonButton onClick={props.onReset} fill="clear" color="medium">
            <IonIcon slot="start" icon={refreshOutline}></IonIcon>
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };

export default BMIControls;
