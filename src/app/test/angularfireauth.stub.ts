import { testUser } from './user.stub'
import { of } from 'rxjs';

// Stub for AngularFireAuth
export const angularFireAuthStub: any = {
  auth: jasmine.createSpyObj('auth', {
    'signInAnonymously': Promise.reject({
      code: 'auth/operation-not-allowed'
    }),
    // 'signInWithPopup': Promise.reject(),
    // 'signOut': Promise.reject()
  }),
  authState: of(testUser)
};