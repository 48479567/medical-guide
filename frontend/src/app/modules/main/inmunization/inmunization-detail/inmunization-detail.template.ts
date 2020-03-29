export const inmunizationDetailTemplate = `
<div class="fx-cc main-content">
  <div class="container">
    <div class="header">
      <h3>{{ inmunization.title }}</h3>
      <ng-content></ng-content>
    </div>
    <div class="content">
      <h4>Type:</h4>
      <p>{{ inmunization.kind }}</p>
      <h4>Description:</h4>
      <p *ngFor="let dscp of inmunization.description">{{ dscp }}</p>
      <h4>Composition:</h4>
      <h5>{{ inmunization.composition.subtitle }}</h5>
      <ul>
        <li *ngFor="let compound of inmunization.composition.list">
          {{ compound }}
        </li>
      </ul>
      <h6>Type: {{ inmunization.composition.type }}</h6>
      <h4>Presentation:</h4>
      <ul>
        <li *ngFor="let prs of inmunization.presentation">{{ prs }}</li>
      </ul>
      <h4>Indications:</h4>
      <p *ngFor="let indication of inmunization.indications">{{ indication }}</p>
      <h4>Scheme:</h4>
      <div class="group" *ngFor="let sch of inmunization.scheme">
        <h5>{{ sch.condition }}</h5>
        <ol>
          <li *ngFor="let application of sch.applications">
            {{ application }}
          </li>
          <h5>{{ sch.additional }}</h5>
        </ol>
      </div>
      <h4>Dosis:</h4>
      <p *ngFor="let dose of inmunization.dose">{{ dose }}</p>
      <h4>Conservation:</h4>
      <p *ngFor="let csrv of inmunization.conservation">{{ csrv }}</p>
      <h4>Administration:</h4>
      <div class="group" *ngFor="let adm of inmunization.administration">
        <h5>{{ adm.subtitle }}</h5>
        <p *ngFor="let list of adm.list">{{ list }}</p>
      </div>
      <h4>Side Effects:</h4>
      <div class="group" *ngFor="let sch of inmunization.sideEffects">
        <h5>{{ sch.subtitle }}</h5>
        <ol>
          <li *ngFor="let list of sch.list">{{ list }}</li>
        </ol>
      </div>
      <h4>Contraindications:</h4>
      <ul>
        <li *ngFor="let cnti of inmunization.contraindications">{{ cnti }}</li>
      </ul>
      <h4>Simultaneous Use:</h4>
      <p>{{ inmunization.simultaneousUse }}</p>
    </div>
  </div>
</div>
`;
