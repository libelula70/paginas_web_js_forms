import { HomePage } from './home.po';
import { TareasPage } from './tareas.po';

describe('workspace-project App', () => {
  let homePage: HomePage;
  let tareasPage: TareasPage

  beforeEach(() => {
    homePage = new HomePage();
    tareasPage = new TareasPage()
  });

  it('should display "Angular" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toContain ('Angular');
  });
  it('should display "CAS" in footer', () => {
    homePage.navigateTo();
    expect(homePage.getFooterText()).toContain ('CAS');
  });
  it('should display "Angular" in h1', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getTitleText()).toContain ('Angular');
  });
  it('should display "CAS" in footer', () => {
    tareasPage.navigateTo();
    expect(tareasPage.getFooterText()).toContain ('CAS');
  });
});
