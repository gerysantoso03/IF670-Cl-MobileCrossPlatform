import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import { useRef, useState } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [BMIType, setBMIType] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    let typeOfBMI: string = "";

    if (!enteredHeight || !enteredWeight) return;

    const bmi =
      +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));

    if (bmi < 18.5) {
      typeOfBMI = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      typeOfBMI = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      typeOfBMI = "Gemuk";
    } else if (bmi >= 30) {
      typeOfBMI = "Obesitas";
    }
    setCalculatedBMI(bmi);
    setBMIType(typeOfBMI);
    console.log(bmi);
  };

  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Tinggi Badan (CM)</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Berat Badan (KG)</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={calculateBMI} className="text-center">
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Calculate
              </IonButton>
            </IonCol>
            <IonCol onClick={resetInputs} className="ion-text-center">
              <IonButton>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          {calculatedBMI && BMIType && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent className="ion-text-center">
                    <h4>{calculatedBMI}</h4>
                    <h4>{BMIType}</h4>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
