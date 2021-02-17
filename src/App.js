import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="well" id="healthSelect">
            <p>The below lists of core rodent pathogens are excluded from ALL Taconic Biosciences health standards:</p>
            <div className="panel panel-default">
        		<div className="panel-heading">
        			<h4 className="panel-title">
        				<a className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseOne">Viruses <span>(excluded at all Taconic Biosciences health standards)</span></a></h4>
        		</div>
        		<div className="panel-collapse collapse" id="collapseOne">
        			<div className="panel-body">
        				Kilham Rat Virus (KRV)<br/>
                        Minute Virus of Mice (MVM)<br/>
                        Mouse Encephalomyelitis Virus (GDVII)/ Rat Theilovirus (RTV)<br/>
                        Mouse Hepatitis Virus (MHV)<br/>
                        Murine Norovirus (MNV)<br/>
                        Mouse Parvovirus (MPV)<br/>
                        Mouse Rotavirus (EDIM)<br/>
                        Pneumonia Virus of Mice (PVM)<br/>
                        Rat Coronavirus (RCV)/Sialodacryoadenitis Virus (SDAV)<br/>
                        Rat Minute Virus (RMV)<br/>
                        Rat Parvovirus (RPV)<br/>
                        Toolan's H1 Virus (TH1)<br/>
                        Ectromelia Virus<br/>
                        Hantaan Virus<br/>
                        K Virus<br/>
                        Lymphocytic Choriomeningitis Virus (LCM)<br/>
                        Mouse Adenovirus I and II (FL and K87)<br/>
                        Mouse Cytomegalovirus (MCMV)<br/>
                        Mouse Kidney Parvovirus (MKPV)<br/>
                        Polyoma Virus<br/>
                        Reovirus  (Reo 3)<br/>
                        Sendai Virus<br/>
                        Thymic Virus<br/>
                        Lactate Dehydrogenase Elevating Virus (LDHV)
        			</div>
        		</div>
        	</div>
        </div>
    </div>
  );
}

export default App;
