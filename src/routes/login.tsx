// react
import { useState } from "react";
// react-router
import { useNavigate } from "react-router";
// styles
import { H2_STYLE } from "~/style/commonStyle";
// shadcn/ui
import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { toast } from "sonner";
// firebase
import { signIn } from "~/lib/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleClickSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      toast.success(`Welcome!`);
    } catch (err: any) {
      setError(err.message);
      toast.error(`Sign-in Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="p-8 w-full max-w-sm shadow-lg">
        <h2 className={H2_STYLE + " mb-6 text-center"}>ログイン</h2>
        <form className="space-y-4" onSubmit={handleSignIn}>
          <div>
            <Label htmlFor="email">メール</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">パスワード </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <ButtonGroup className="w-full mt-6 flex justify-end">
            <Button type="button" onClick={handleClickSignUp}>
              会員登録
            </Button>
            <Button type="submit" variant="outline">
              ログイン
            </Button>
          </ButtonGroup>
        </form>
      </Card>
    </div>
  );
};

export default Login;
