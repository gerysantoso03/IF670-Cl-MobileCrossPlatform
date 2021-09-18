import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2 className="ion-text-center">
          00000032805 - Bernardus Gery Santoso
        </h2>
        <IonButton expand="block" color="success" routerLink="/bmi">
          BMI Calculator
        </IonButton>
        <IonButton expand="block" color="tertiary" routerLink="/bmr">
          BMR Calculator
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
