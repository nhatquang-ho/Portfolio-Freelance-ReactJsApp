# 🔍 Créer un moteur de recherche sémantique avec IA et Pinecone

La **recherche sémantique** permet de retrouver des documents pertinents même si les mots utilisés par l’utilisateur ne correspondent pas exactement à ceux présents dans la base.  
Elle repose sur les **embeddings** (vecteurs numériques) et une **base vectorielle** pour comparer la similarité entre textes.  

Dans ce post, je montre comment utiliser **Pinecone** pour mettre en place un moteur de recherche sémantique moderne.

---

## 🧠 Étape 1 : Générer des embeddings

Les *embeddings* transforment du texte en vecteurs.  
On peut utiliser **OpenAI** ou **Hugging Face**.

Exemple avec OpenAI en **Python** :

```python
from openai import OpenAI

client = OpenAI()

query = "énergie solaire"
embedding = client.embeddings.create(
    model="text-embedding-ada-002",
    input=query
).data[0].embedding
```

---

## 🗄️ Étape 2 : Stocker les vecteurs dans Pinecone

**Pinecone** est une base de données vectorielle managée qui permet de stocker et rechercher des *embeddings* à grande échelle.

```python
import pinecone

# Initialiser Pinecone
pinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENV")

# Créer ou se connecter à un index
index_name = "semantic-search"
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name, dimension=1536)

index = pinecone.Index(index_name)

# Ajouter des documents
index.upsert([
    ("doc1", embedding1),
    ("doc2", embedding2),
    ("doc3", embedding3)
])
```

---

## 🔎 Étape 3 : Rechercher par similarité

Lorsqu’un utilisateur fait une requête, on génère son embedding et on interroge Pinecone.

```python
query_embedding = client.embeddings.create(
    model="text-embedding-ada-002",
    input="panneaux solaires"
).data[0].embedding

# Recherche des 3 documents les plus proches
results = index.query(vector=query_embedding, top_k=3, include_metadata=True)
print(results)
```

Pinecone retourne les **IDs des documents les plus proches**, avec leur **score de similarité**.

---

## 🏗️ Architecture typique

**Frontend (React)** : champ de recherche + affichage des résultats.  
**Backend (FastAPI ou Spring Boot)** : reçoit la requête, génère l’embedding, interroge Pinecone.  
**Pinecone** : stocke les embeddings et retourne les résultats les plus proches.  
**Base classique (Postgres / MongoDB)** : stocke les métadonnées et le contenu des documents.

---

## 📈 Cas d’usage

- Recherche documentaire interne (FAQ, knowledge base)  
- Chatbots augmentés par contexte  
- Recherche produit en e-commerce  
- Analyse de données textuelles  

---

## ✅ Conclusion

Avec **Pinecone**, la mise en place d’un moteur de recherche sémantique devient **simple et scalable**.  
Associé à des embeddings générés par **OpenAI** ou **Hugging Face**, il permet d’obtenir des résultats pertinents et rapides, même sur de grandes bases de données.  

J’ai déjà utilisé cette approche dans mes prototypes, et elle s’intègre parfaitement dans une **architecture fullstack moderne**.
