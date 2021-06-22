interface RepositoriesState {
   loading: boolean;
   error: string | null;
   data: string[];
};

interface SearchRepositories {
   type: 'search_repositories'
};

interface SearchRepositoriesSuccess {
   type: 'search_repositories_success';
   payload: string[];
};

interface SearchRepositoriesError {
   type: 'search_repositories_error';
   payload: string;
};

const reducer = (
   state: RepositoriesState, 
   action: SearchRepositories | SearchRepositoriesSuccess | SearchRepositoriesError
   ): RepositoriesState => {
   switch (action.type) {
      case 'search_repositories':
         return {loading: true, error: null, data: []};

      case 'search_repositories_success':
         return {loading: false, error: null, data: action.payload};

      case 'search_repositories_error':
         return {loading: false, error: action.payload, data: []};

      default:
         return state;
   }
};

export default reducer;