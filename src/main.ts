import { execSync } from 'child_process';

export const $ = ({ command }: { command: string }) => {
  execSync(command);
}
