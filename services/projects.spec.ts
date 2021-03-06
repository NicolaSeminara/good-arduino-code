import { getProject, getProjectCode, getProjects, getProjectText } from './projects';

describe('projects', () => {
  describe('getProjects', () => {
    it('should return the list of projects', async () => {
      expect(await getProjects()).toContain('simon');
    });
  });

  describe('getProject', () => {
    it('should return information about the project', async () => {
      expect(await getProject('simon')).toMatchObject({
        id: 'simon',
        name: 'Simon Game',
      });
    });
  });

  describe('getProjectText', () => {
    it('should return the description of the project', async () => {
      expect(await getProjectText('simon')).toContain('Simon');
    });
  });

  describe('getProjectCode', () => {
    it('should return the list of source code files for the given project', async () => {
      const result = await getProjectCode('simon');
      expect(result.length).toEqual(2);
      const fileNames = result.map((file) => file.name);
      expect(fileNames).toEqual(['simon.ino', 'pitches.h']);
    });

    it('should mark the sketch as primary, other files as non-primary', async () => {
      const result = await getProjectCode('simon');
      expect(result[0].name).toEqual('simon.ino');
      expect(result[0].primary).toEqual(true);
      expect(result[1].primary).toEqual(false);
    });
  });
});
