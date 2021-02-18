import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Accordions = () => {
    return (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Viruses <span>(excluded at all Taconic Biosciences health standards)</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Kilham Rat Virus (KRV)<br />
                  Minute Virus of Mice (MVM)<br />
                  Mouse Encephalomyelitis Virus (GDVII)/ Rat Theilovirus (RTV)<br />
                  Mouse Hepatitis Virus (MHV)<br />
                  Murine Norovirus (MNV)<br />
                  Mouse Parvovirus (MPV)<br />
                  Mouse Rotavirus (EDIM)<br />
                  Pneumonia Virus of Mice (PVM)<br />
                  Rat Coronavirus (RCV)/Sialodacryoadenitis Virus (SDAV)<br />
                  Rat Minute Virus (RMV)<br />
                  Rat Parvovirus (RPV)<br />
                  Toolan's H1 Virus (TH1)<br />
                  Ectromelia Virus<br />
                  Hantaan Virus<br />
                  K Virus<br />
                  Lymphocytic Choriomeningitis Virus (LCM)<br />
                  Mouse Adenovirus I and II (FL and K87)<br />
                  Mouse Cytomegalovirus (MCMV)<br />
                  Mouse Kidney Parvovirus (MKPV)<br />
                  Polyoma Virus<br />
                  Reovirus  (Reo 3)<br />
                  Sendai Virus<br />
                  Thymic Virus<br />
                  Lactate Dehydrogenase Elevating Virus (LDHV)
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Bacteria, mycoplasma and fungi <span>(excluded at all Taconic Biosciences health standards)</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                  Bordetella bronchiseptica<br />
                  Cilia Associated Respiratory Bacillus (CARB)<br />
                  Citrobacter rodentium<br />
                  Clostridium piliforme<br />
                  Corynebacterium kutscheri<br />
                  Helicobacter spp.<br />
                  Mycoplasma pulmonis<br />
                  Pasteurella pneumotropica<br />
                  Pneumocystis spp.<br />
                  Salmonella spp.<br />
                  Streptococcus pneumoniae<br />
                  Streptobacillus moniliformis
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                Parasites <span>(excluded at all Taconic Biosciences health standards)</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                  Taconic Biosciences excludes all parasites.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    )
}

export default Accordions
