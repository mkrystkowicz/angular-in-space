import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { PilotValidators } from './pilot-validators';

fdescribe('PilotValidators', () => {
  describe('pilotName', () => {
    describe('when starts from uppercase', () => {
      it('when value is empty', () => {
        const control = new FormControl('');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from uppercase', () => {
      it('should return null', () => {
        const control = new FormControl('Adam');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from lowercase', () => {
      it('should return validation object', () => {
        const control = new FormControl('adam');
        expect(PilotValidators.pilotName(control)).toEqual({ pilotName: true });
      });
    });

    describe('pilotForbidden', () => {
      describe('when value is empty', () => {
        it('should return observable with null', () => {
          const control = new FormControl('');
          PilotValidators.pilotForbidden(control).subscribe((result) =>
            expect(result).toBeNull()
          );
        });
      });
    });

    describe('when value is forbidden', () => {
      it('should return observable with validation object', () => {
        const control = new FormControl('Ciapciak');
        spyOn(ajax, 'getJSON').and.returnValue(of([{ name: 'Ciapciak' }]));
        PilotValidators.pilotForbidden(control).subscribe((result) =>
          expect(result).toEqual({ pilotForbidden: true })
        );
      });
    });
  });
});
