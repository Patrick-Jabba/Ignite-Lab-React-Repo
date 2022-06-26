import { Subscriber } from "@apollo/client/utilities/observables/Observable";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetUserQuery } from "../graphql/generated";

interface SubscriberProps {
  name: string,
}

export function Event(props: SubscriberProps) {
  const { data } = useGetUserQuery({
    variables: {
      id: props.name,
    }
  });
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="bg-blur bg-cover flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div>
          <p>Olá, para iniciar seu aprendizado selecione uma das aulas ao lado. 🚀</p>
        </div>
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1"> </div>
        }
        <Sidebar />
      </main>
    </div>
  )
}